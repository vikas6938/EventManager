import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './EventCard'; // Import the EventCard component

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/events'); // Fetch events from the backend
                setEvents(response.data); // Set the fetched events to state
            } catch (err) {
                setError('Error fetching events');
            }
        };

        fetchEvents();
    }, []); // Fetch events only once on component mount

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Upcoming Events</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row">
                {events.length > 0 ? (
                    events.map((event) => (
                        <EventCard key={event._id} event={event} /> // Pass event data to EventCard
                    ))
                ) : (
                    <p className="text-center">No events available</p>
                )}
            </div>
        </div>
    );
};

export default EventList;
