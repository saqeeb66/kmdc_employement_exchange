import React, { useState, useRef } from 'react';
import './ContactForm.css'; // Assume you have appropriate CSS for .error, .modal, etc.

function ContactForm() {
  // Form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // Validation regex patterns
  const nameRegex = /^[A-Z][a-zA-Z\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;

  // Form field handlers with validation
  const handleNameChange = (e) => {
    const formattedName = e.target.value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setName(formattedName);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMobileChange = (e) => setMobile(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Validation check
  const isValidField = (value, regex) => regex.test(value);

  // Modal content generator
  const openModal = (policyType) => {
    let content = "";
    switch(policyType) {
      case "terms":
        content = "<h2>Terms and Conditions</h2><br><p>1. This website is designed, developed, and maintained by Karnataka State Minorities Commission.</p>";
        break;
      case "copyright":
        content = "<h2>Copyright Policy</h2><br><p>Material featured on this site may be reproduced free of charge in any format or media without requiring specific permission...</p>";
        break;
      case "privacy":
        content = "<h2>Privacy Policy</h2><br><p>1. Thanks for visiting the website of KSMC, and reviewing our privacy policy...</p>";
        break;
      case "linking":
        content = "<h2>External Linking Policy</h2><br><p>We do not object to you linking directly to the information that is hosted on our site...</p>";
        break;
      default:
        content = "";
    }
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Close modal function
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="contact-form">
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className={isValidField(name, nameRegex) ? "" : "error"}
          placeholder="Enter correct name"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className={isValidField(email, emailRegex) ? "" : "error"}
          placeholder="Enter correct email"
        />

        <label>Mobile:</label>
        <input
          type="tel"
          name="mobile"
          value={mobile}
          onChange={handleMobileChange}
          className={isValidField(mobile, mobileRegex) ? "" : "error"}
          placeholder="Enter correct mobile number"
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={message}
          onChange={handleMessageChange}
          className={message ? "" : "error"}
          placeholder="Enter a message"
        ></textarea>
      </form>

      <button onClick={() => openModal('terms')}>Show Terms</button>
      <button onClick={() => openModal('privacy')}>Show Privacy Policy</button>
      <button onClick={() => openModal('copyright')}>Show Copyright</button>
      <button onClick={() => openModal('linking')}>Show Linking Policy</button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
