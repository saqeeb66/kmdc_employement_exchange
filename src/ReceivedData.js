import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ReceivedData.css";

const ReceivedData = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize navigate for redirection

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/candidate/getAll");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleView = async (id) => {
    try {
      await fetch(`http://localhost:8080/candidate/markAsViewed/${id}`, {
        method: "PUT",
      });
      alert("Candidate marked as viewed.");
      fetchData(); 
    } catch (error) {
      console.error("Error marking as viewed:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this candidate?")) {
      try {
        await fetch(`http://localhost:8080/candidate/delete/${id}`, {
          method: "DELETE",
        });
        alert("Candidate deleted successfully.");
        fetchData(); 
      } catch (error) {
        console.error("Error deleting candidate:", error);
      }
    }
  };

  const handleOpen = (candidate) => {
    // Redirect to a new page with candidate's data passed in state
    navigate('/candidateDetails', { state: candidate });
  };

  const filteredData = data.filter((candidate) =>
    candidate.areaOfInterest &&
    candidate.areaOfInterest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="received-data-container">
      <h2>Received Data</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by area of interest..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>candidateId</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Area Of Interest</th>
            <th>Key Skills</th>
            <th>Experience</th>
            <th>Education</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((candidate) => (
            <tr key={candidate.candidateId}>
              <td>{candidate.candidateId}</td>
              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>{candidate.mobile}</td>
              <td>{candidate.areaOfInterest}</td>
              <td>{candidate.keySkills}</td>
              <td>{candidate.experience}</td>
              <td>{candidate.educationType}</td>
              <td>
                <button onClick={() => handleView(candidate.candidateId)}>View</button>
                <button onClick={() => handleDelete(candidate.candidateId)}>Delete</button>
                <button onClick={() => handleOpen(candidate)}>Open</button> {/* Open button */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReceivedData;
