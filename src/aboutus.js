import React, { useState } from 'react';
import './aboutus.css';
import { Link } from 'react-router-dom';


const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [modalText, setModalText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const openModal = (type) => {
    const modalContent = {
      terms: 'Terms and Conditions content...',
      copyright: 'Copyright Policy content...',
      privacy: 'Privacy Policy content...',
      linking: 'External Linking Policy content...'
    };
    setModalText(modalContent[type]);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <header>
        <Navbar toggleMenu={toggleMenu} menuActive={menuActive} />
      </header>

      <div className="heading">
        <h1>Welcome to KSMC</h1>
      </div>

      <AboutUs />

      <Footer openModal={openModal} />

      {showModal && (
        <Modal modalText={modalText} closeModal={closeModal} />
      )}
    </div>
  );
};

const Navbar = ({ toggleMenu, menuActive }) => (
  <nav className="navbar">
    <h1 className="logo">Employment Exchange Portal</h1>
    <button className="menu-toggle" onClick={toggleMenu}>☰</button>
    <ul className={`menu ${menuActive ? 'menu-active' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">aboutus</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/UserLogin">UserLogin</Link></li>
            <li><Link to="/AdminLogin">AdminLogin</Link></li>
    </ul>
  </nav>
);

const AboutUs = () => (
  <div className="about-us-wrapper">
    <div className="blue-line">
      <h2>About Us</h2>
    </div>
    <div className="content">
      <div className="text-section">
       <p>
          The Karnataka State Minorities Commission was constituted by the Government in its Order No. DPAR 01 LMR 83 Dated, 09th May 1983, in order to preserve secular traditions, promote National Integration, undertake effective enforcement and implementation of all the safeguards provided for the Minorities in the Constitution and in the Central and State laws and also to evolve State policies and schemes in this regard.
        </p>
        <p>
          The Commission thus constituted was vested with powers under The Commissions of Inquiry Act 1952. By Karnataka Act No. 31 of 1994 (first published in the Karnataka Gazette Extraordinary dated 3rd October, 1994) statutory status was conferred on the Commission. Thereafter depending on the requirement and necessity, The Karnataka State Minorities Commission Act was amended and the most important amendment was by Karnataka Act 13 of 2016 which conferred Powers of Civil Court to the Commission.
        </p>
        <p>
          Accordingly, rules were published in the Gazette dated 10th October, 0 in Notification No: DPAR 19 LMR 95 and an amendment under Notification No. MWD 229 LML 216, dated: 10th July, 2017.
        </p>
        
        <div className="Structure">
          <h3>Structure of the Organization:</h3>
          <p>
            Karnataka Minorities Development Corporation is a Government of Karnataka Undertaking Corporation and established under the Companies Act 1956. As on today, the authorised share capital of the Corporation is Rs.600.00 Crores. The Corporation is now functioning under the supervision of Minorities Welfare Department of the Government of Karnataka. The Registered Office of the Corporation is based at Bangalore and it has its District Offices in all District Headquarters of the State. The Chairman of the Board of Directors is the executive head and the Managing Director is the administrative head. The Corporation is entrusted with the job of development of minority’s status socially, educationally and economically through the Government sponsored Schemes which are implemented through its District Offices located at all District Headquarters of Karnataka.
          </p>
        </div>
        
        <div className="members">
          <h3>Commission Members</h3>
          <ul>
            <li>Sri Siddaramaiah, Hon'ble Chief Minister and Minister of Minority Welfare</li>
            <li>Sri Abdul Azeem, Chairman.</li>
            <li>Smt Salma Firdose, Secretary (I/C) of the Commission.</li>
          </ul>
        </div>
        
        <div className="minorities">
          <h3>Minority Communities</h3>
          <p>The following communities are declared...</p>
          <ul>
            <li>Muslims</li>
            <li>Christians</li>
            <li>Jains</li>
            <li>Buddhists</li>
            <li>Sikhs</li>
            <li>Zoroastrians (Parsis)</li>
          </ul>
        </div>
      </div>
      <div className="image-section">
        <img src="https://www.karmin.in/en/img/New_KMDC.jpg" alt="KSMC Building" />
      </div>
    </div>
  </div>
);

const Footer = ({ openModal }) => (
  <footer>
    <div className="footer-container">
      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/reports">Reports</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section footer-contact">
        <h3>Contact</h3>
        <p>KMDC Bhavan 1st floor...</p>
        <p>+91-80-22863400 / 22864204</p>
        <p>secretary@karmin.in</p>
      </div>
      <div className="footer-section policy">
        <h3>Policy</h3>
        <ul>
          <li><a href="#" onClick={() => openModal('terms')}>Terms And Conditions</a></li>
          <li><a href="#" onClick={() => openModal('copyright')}>Copyright Policy</a></li>
          <li><a href="#" onClick={() => openModal('privacy')}>Privacy Policy</a></li>
          <li><a href="#" onClick={() => openModal('linking')}>External Linking Policy</a></li>
        </ul>
      </div>
      <div className="footer-section social-media">
        <h3>Social Media</h3>
        <div className="social-icons">
          <a href="https://twitter.com/ksmc_in"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="https://www.facebook.com/profile.php?id=100076970431130"><i className="fab fa-facebook-f"></i> Facebook</a>
          <a href="https://wa.me/6360704199"><i className="fab fa-whatsapp"></i> WhatsApp</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; Karnataka State Minorities Commission, {new Date().getFullYear()}, All Rights Reserved.</p>
    </div>
  </footer>
);

const Modal = ({ modalText, closeModal }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close-btn" onClick={closeModal}>&times;</span>
      <div>{modalText}</div>
    </div>
  </div>
);

export default App;
