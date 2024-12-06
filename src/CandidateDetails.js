import React from "react";
import { useLocation } from "react-router-dom";
import "./CandidateDetails.css"; // Assuming you've added the CSS for styling

const CandidateDetails = () => {
  const { state: candidate } = useLocation(); // Get candidate data passed through state

  return (
    <div className="candidate-details">
      <h2>Candidate Details</h2>
      <div className="candidate-info">
        <div className="info-item">
          <h3>Personal Information</h3>
          <ul>
            <li><strong>Name:</strong> {candidate.name}</li>
            <li><strong>Email:</strong> {candidate.email}</li>
            <li><strong>Mobile Number:</strong> {candidate.mobile}</li>
            <li><strong>Date of Birth:</strong> {candidate.dob}</li>
            <li><strong>Gender:</strong> {candidate.gender}</li>
            <li><strong>Marital Status:</strong> {candidate.maritalStatus}</li>
            <li><strong>Address:</strong> {candidate.address}</li>
            <li><strong>District:</strong> {candidate.District}</li>
            <li><strong>State:</strong> {candidate.state}</li>
            <li><strong>Country:</strong> {candidate.country}</li>
            <li><strong>PIN:</strong> {candidate.pin}</li>
          </ul>
        </div>
        <div className="info-item">
          <h3>Educational Background</h3>
          <ul>
            <li><strong>Education Type:</strong> {candidate.educationType}</li>
            <li><strong>Institution Name:</strong> {candidate.institutionName}</li>
            <li><strong>School Medium:</strong> {candidate.schoolMedium}</li>
            <li><strong>Marks:</strong> {candidate.marks}</li>
            <li><strong>Start Year:</strong> {candidate.startYear}</li>
            <li><strong>End Year:</strong> {candidate.endYear}</li>
            <li><strong>Grading System:</strong> {candidate.gradingSystem}</li>
          </ul>
        </div>
        <div className="info-item">
          <h3>Professional Information</h3>
          <ul>
            <li><strong>Profile Summary:</strong> {candidate.profileSummary}</li>
            <li><strong>Key Skills:</strong> {candidate.keySkills}</li>
            <li><strong>Experience:</strong> {candidate.experience}</li>
            <li><strong>Current Employment:</strong> {candidate.currentEmployment}</li>
            <li><strong>Employment Type:</strong> {candidate.employmentType}</li>
          </ul>
        </div>
        <div className="info-item">
          <h3>Work Experience</h3>
          <ul>
            <li><strong>Company Name:</strong> {candidate.companyName}</li>
            <li><strong>Job Title:</strong> {candidate.jobTitle}</li>
            <li><strong>Joining Year:</strong> {candidate.joiningYear}</li>
            <li><strong>Joining Month:</strong> {candidate.joiningMonth}</li>
            <li><strong>Worked Till Year:</strong> {candidate.workedTillYear}</li>
            <li><strong>Worked Till Month:</strong> {candidate.workedTillMonth}</li>
            <li><strong>Notice Period:</strong> {candidate.noticePeriod}</li>
            <li><strong>Functional Area:</strong> {candidate.functionalArea}</li>
          </ul>
        </div>
        <div className="info-item">
          <h3>Project Information</h3>
          <ul>
            <li><strong>Project Title:</strong> {candidate.projectTitle}</li>
            <li><strong>Project Type:</strong> {candidate.projectType}</li>
            <li><strong>Project Description:</strong> {candidate.projectDescription}</li>
            <li><strong>Client Name:</strong> {candidate.clientName}</li>
          </ul>
        </div>
        <div className="info-item">
          <h3>Certifications</h3>
          <ul>
            <li><strong>Certificate Name:</strong> {candidate.certificateName}</li>
            <li><strong>Issuing Authority:</strong> {candidate.issuingAuthority}</li>
            <li><strong>Date of Issue:</strong> {candidate.dateOfIssue}</li>
          </ul>
        </div>
        <div className="info-item">
          <h3>Additional Files</h3>
          {candidate.resume && <a href={candidate.resume} target="_blank" rel="noopener noreferrer">View Resume</a>}
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
