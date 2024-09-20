import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand text-success" to="/">Event Manager</Link>

        <form className="d-flex">
            <input className="form-control" type="search" placeholder="Location" aria-label="Location" />
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/events">EventCard</Link>
            </li>
            <li className="nav-item">
              <Link to="/create-event" className="nav-link text-dark">Create Event</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary me-2 " to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary" to="/register">Register</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Header;
