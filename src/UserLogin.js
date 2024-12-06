import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css';
import './home.css';

const UserLogin = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleToggleMenu = () => {
        document.querySelector('.menu').classList.toggle('show');
    };

    const handleNameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const validateLoginForm = (e) => {
        e.preventDefault();

        if (!userName || !password) {
            setErrorMessage('Username and password are required.');
            return;
        }

        // Replace this with your actual backend validation API call
        fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, password }),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Login successful!");
                    navigate('/CandidateInformationForm');
                } else {
                    setErrorMessage('Invalid username or password.');
                }
            })
            .catch((error) => {
                console.error("Error during login:", error);
                setErrorMessage('An error occurred. Please try again later.');
            });
    };

    return (
        <div>
            <header>
                <nav className="navbar">
                    <h1 className="logo">Employment Exchange Portal</h1>
                    <button
                        className="menu-toggle"
                        onClick={handleToggleMenu}>
                        ☰
                    </button>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/UserLogin">User Login</Link></li>
                        <li><Link to="/AdminLogin">Admin Login</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <div className="login-box">
                    <h2>User Login</h2>
                    <form onSubmit={validateLoginForm}>
                        <div className="input-group">
                            <input
                                type="text"
                                id="userName"
                                value={userName}
                                onChange={handleNameChange}
                                required
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button type="submit" className="btn">Log In</button>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                    <p className="register-link">
                        Don't have an account? <Link to="/Register">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
