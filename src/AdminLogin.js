import React, { useState } from 'react';
import './admin.css';
import './home.css';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleMenu = () => {
        document.querySelector('.menu').classList.toggle('show');
    };

    const validateForm = (event) => {
        event.preventDefault();
        // Replace with actual validation logic as required
        if (username === 'admin' && password === 'admin123') {
            setErrorMessage('');
            // Handle successful login
            alert("Login successful!");
            navigate('/receiveddata'); // Navigate to the RegisteredData/ReceivedData page
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div>
            <header>
                <nav className="navbar">
                    <h1 className="logo">Employment Exchange Portal</h1>
                    <button className="menu-toggle" onClick={() => document.querySelector('.menu').classList.toggle('menu-active')}>☰</button>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">aboutus</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                        <li><Link to="/UserLogin">UserLogin</Link></li>
                        <li><Link to="/AdminLogin">AdminLogin</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <div className="login-box">
                    <h2>Admin Login</h2>
                    <form id="loginForm" onSubmit={validateForm}>
                        <div className="input-group">
                            <input 
                                type="text" 
                                id="username" 
                                required 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-group">
                            <input 
                                type="password" 
                                id="password" 
                                required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button type="submit" className="btn">Log In</button>
                        <p id="error-message">{errorMessage}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
