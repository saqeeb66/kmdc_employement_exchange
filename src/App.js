import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import AboutUs from './aboutus';
import Contact from './contact';
import UserLogin from './UserLogin';
import Register from './Register';
import AdminLogin from './AdminLogin';
import CandidateInformationForm from './CandidateInformationForm';
import ResponsePage from './ResponsePage';
import FinalSubmissionPage from './FinalSubmissionPage';
import ReceivedData from './ReceivedData'; // Your page component
import CandidateDetails from "./CandidateDetails";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/CandidateInformationForm" element={<CandidateInformationForm />} /> {/* New Route */}
        <Route path="/response" element={<ResponsePage />} />
        <Route path="/FinalSubmissionPage" element={<FinalSubmissionPage />} />
        <Route path="/ReceivedData" element={<ReceivedData />} />
        <Route path="/CandidateDetails" element={<CandidateDetails />} />





        {/* Fallback route to handle undefined routes */}
        {/* <Route path="*" element={<h2>404 Page Not Found</h2>} /> */}
      </Routes>
    </Router>
  );
};

export default App;

