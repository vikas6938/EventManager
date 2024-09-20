import React from 'react';

const Home = () => {
  return (
    
    <div className="container mt-2">
      <div className="jumbotron text-center bg-light  rounded">
      <img className="card-img-front" src="https://sun9-70.userapi.com/Lj-yeKcFcmnmk1QC2c1WmZj3DpcSk7jztj1HDw/V8L_CPVBzjQ.jpg" alt="Event" />
        <h1 className="display-4">Welcome to the Event Management System!</h1>
        <p className="lead">Discover upcoming events and manage your own events with ease.</p>
        <hr className="my-4" />
        <p>To create and manage events, please log in or register.</p>
       
      </div>
     
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src="https://via.placeholder.com/300" alt="Event" />
            <div className="card-body">
              <h5 className="card-title">Music Concert</h5>
              <p className="card-text">Join us for an amazing night of music and fun!</p>
              <a href="/events/1" className="btn btn-primary">View Event</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src="https://via.placeholder.com/300" alt="Event" />
            <div className="card-body">
              <h5 className="card-title">Tech Conference</h5>
              <p className="card-text">Join industry leaders to explore the latest in technology.</p>
              <a href="/events/2" className="btn btn-primary">View Event</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src="https://via.placeholder.com/300" alt="Event" />
            <div className="card-body">
              <h5 className="card-title">Art Exhibition</h5>
              <p className="card-text">Experience the finest artwork from contemporary artists.</p>
              <a href="/events/3" className="btn btn-primary">View Event</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
