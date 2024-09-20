import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [maxAttendees, setMaxAttendees] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('date', date);
        formData.append('location', location);
        formData.append('maxAttendees', maxAttendees);
        formData.append('image', image);

        try {
            // Replace the URL with your backend URL
            await axios.post('http://localhost:5000/api/events/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            alert('Event created successfully');

            // Clear form fields after success
            setTitle('');
            setDescription('');
            setDate('');
            setLocation('');
            setMaxAttendees('');
            setImage(null);
            setError('');

            // Redirect to the Event List page (or wherever EventCard components are displayed)
            navigate('/events'); // Assuming '/events' is the route for Event List page

        } catch (error) {
            console.error(error);
            setError('Error creating event');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Create Event</h3>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                {/* Event creation form fields */}
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Event Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Event Title"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Event Description"
                                        rows="3"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Event Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label">Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Location"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="maxAttendees" className="form-label">Max Attendees</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="maxAttendees"
                                        value={maxAttendees}
                                        onChange={(e) => setMaxAttendees(e.target.value)}
                                        placeholder="Max Attendees"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Event Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Create Event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
