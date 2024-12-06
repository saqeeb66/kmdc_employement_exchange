import React from 'react';
import { useNavigate } from 'react-router-dom';
import './finalSubmission.css';

const FinalSubmissionPage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="final-submission-container">
      <h2>Your response has been submitted successfully!</h2>
      <p>Our team will contact you soon.</p>
      <h3>THANK YOU!</h3>
      <button onClick={handleHome} className="home-button">
        Go to Home
      </button>
    </div>
  );
};

export default FinalSubmissionPage;
