import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData), // Ensure valid JSON structure
      });

      if (response.ok) {
        alert('Registration successful!');
        navigate('/UserLogin'); // Redirect to UserLogin page after successful registration
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('An error occurred during registration.');
    }
  };

  const validateRegistrationForm = (e) => {
    e.preventDefault();

    const { userName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    setErrorMessage('');
    registerUser({ userName, email, password });
  };

  const toggleMenu = () => {
    document.querySelector('.menu').classList.toggle('show');
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <h1 className="logo">Employment Exchange Portal</h1>
          <button className="menu-toggle" onClick={toggleMenu}>
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
        <div className="registration-box">
          <h2>User Registration</h2>
          <form id="registrationForm" onSubmit={validateRegistrationForm}>
            <div className="input-group">
              <input
                type="text"
                id="reg-name"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
              <label htmlFor="reg-name">Username</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="reg-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="reg-email">Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                id="reg-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="reg-password">Password</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                id="reg-confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <label htmlFor="reg-confirm-password">Confirm Password</label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            {errorMessage && (
              <p id="register-error-message" style={{ color: 'red' }}>
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
