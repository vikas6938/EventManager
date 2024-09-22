import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            setSuccess('User registered successfully');
            setName('');
            setEmail('');
            setPassword('');

            // Redirect to the login page or home page after success
            setTimeout(() => {
                navigate('/login'); // Redirect to login page after successful registration
            }, 1500); // Optional: add a small delay before redirecting
        } catch (error) {
            // Check if the error response is available and display the correct error
            if (error.response) {
                setError(error.response.data.message || 'Registration failed. Please try again.');
            } else {
                setError('An unknown error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Register</h3>
                            <form onSubmit={handleSubmit}>
                                {/* Name Input */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                {/* Password Input */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}

                                {/* Success Message */}
                                {success && (
                                    <div className="alert alert-success" role="alert">
                                        {success}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
