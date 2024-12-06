import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './response.css';

const ResponsePage = () => {
  const { state: formData } = useLocation();
  const navigate = useNavigate();

  const handleFinalSubmit = () => {
    // Make an API call to save the form data
    fetch("http://localhost:8080/candidate/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          navigate('/FinalSubmissionPage'); // Redirect on success
        } else {
          return response.json().then((data) => {
            alert(`Error: ${data.message || "Failed to submit"}`);
          });
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form.");
      });
  };

  const handleEdit = () => {
    navigate('/CandidateInformationForm', { state: formData }); // Redirect to edit page with existing data
  };

  return (
    <div className="response-container">
      <h2>Response Submitted Successfully!</h2>
      <h3>Your Details</h3>
      <ul>
        {Object.keys(formData).map((key) => (
          <li key={key}>
            <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>
            {formData[key]}
          </li>
        ))}
      </ul>
      <div className="button-group">
        <button onClick={handleEdit} className="edit-button">Back</button>
        <button onClick={handleFinalSubmit} className="final-submit-button">Final Submit</button>
      </div>
    </div>
  );
};

export default ResponsePage;
