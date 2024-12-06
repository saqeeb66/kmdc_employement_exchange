// src/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';


function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      img: pic1,
      alt: 'Slide 1',
      title: 'Karnataka Minority Development Council (KMDC)',
      description: 'Empowering minority communities through employment and resources.',
    },
    {
      img: pic2,
      alt: 'Slide 2',
      title: 'vidhana soudha',
      description: 'Bridging the gap between opportunities and deserving candidates.',
    },
    {
      img: pic3,
      alt: 'Slide 3',
      title: 'THREE PILLARS OF KARNATAKA',
      description: '.',
    },
  ];

  const changeSlide = (direction) => {
    setActiveSlide((prevSlide) => (prevSlide + direction + slides.length) % slides.length);
  };  

  const openModal = (policy) => {
    const modalText = {
      terms: '<h3>Terms and Conditions</h3><p1>1. This website is designed, developed and maintained by Karnataka State Minorities Commission. <\p><p>\n 2. Though all efforts have been made to ensure the accuracy and currency of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Department(s) and/or other source(s), and to obtain appropriate professional advice.</p> <p>3. Under no circumstances will this Department be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.</p> <p>4. These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.</p> <p>5. The information posted on this website could include hypertext links or pointers to information created and maintained by non-Government/private organisations. KSMC is providing these links and pointers solely for your information and convenience. When you select a link to an outside website, you are leaving the KSMC website and are subject to the privacy and security policies of the owners/sponsors of the outside website.</p> <p> 6. KSMC, does not guarantee the availability of such linked pages at all times.</p> <p>7. KSMC, cannot authorise the use of copyrighted materials contained in linked websites. Users are advised to request such authorisation from the owner of the linked website.</p> <p>8. KSMC, does not guarantee that linked websites comply with Indian Government Web Guidelines.</p>',
      copyright: '<h3>Copyright Policy</h3><p>Material featured on this site may be reproduced free of charge in any format or media without requiring specific permission. This is subject to the material being reproduced accurately and not being used in a derogatory manner or in a misleading context. Where the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material does not extend to any material on this site, which is explicitly identified as being the copyright of a third party. Authorisation to reproduce such material must be obtained from the copyright holders concerned.</p>',
      privacy: '<h3>Privacy Policy</h3><p>1. Thanks for visiting website of KSMC, and reviewing our privacy policy.<p></p>2. We collect no personal information, like names or addresses, when you visit our website. If you choose to provide that information to us, it is only used to fulfil your request for information.<p></p>3. We do collect some technical information when you visit to make your visit seamless. The section below explains how we handle and collect technical information when you visit our website.<p></p>4. Information collected and stored automatically.<p></p>5. When you browse, read pages, or download information on this website, we automatically gather and store certain technical information about your visit.<p></p>6. This information never identifies who you are. The information we collect and store about your visit is listed below:<p></p>7. The Internet domain of your service provider (e.g. abc.net.in) and IP address (an IP address is a number that is automatically assigned to your computer whenever you are surfing the web) from which you access our website.<p></p>8. The type of browser (such as Firefox, Netscape, or Internet Explorer) and operating system (Windows, Linux) used to access our site.<p></p>9. The date and time you access/accessed our site.<p></p>10. The pages/URLs you have visited, and If you reached this website from another website, the address of that referring website<p></p>11. This information is only used to help us make the site more useful for you. With this data, we learn about the number of visitors to our site and the types of technology our visitors use. We never track or record information about individuals and their visits.</p>',
      linking: '<h3>External Linking Policy</h3><p>   We do not object to you linking directly to the information that is hosted on our site and no prior permission is required for the same. However, we would like you to inform us about any links provided to our site so that you can be informed of any changes or updates therein. Also, we do not permit our pages to be loaded into frames on your site. Our department’s pages must load into a newly opened browser window of the user.</p>',
    };
    document.getElementById('modalText').innerHTML = modalText[policy];
    document.getElementById('policyModal').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('policyModal').style.display = 'none';
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

   {/* Slider Section */}
   <section className="slider">
        <div className="slides">
          {slides.map((slide, index) => (
            <div
              className={`slide ${activeSlide === index ? 'active' : ''}`}
              key={index}
              style={{ display: activeSlide === index ? 'block' : 'none' }}
            >
              <img src={slide.img} alt={slide.alt} />
              <div className="slide-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
        <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
          <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
        </div>
      </section>

      {/* Content Section */}
      <section className="content">
        <div className="content-box">
          <h3>Our Mission</h3>
          <p>The Employment Exchange Portal connects job seekers from minority communities with opportunities.</p>
        </div>
        <div className="content-box">
          <h3>Karnataka Minority Office</h3>
          <p>We support skill development and professional growth for minority populations across Karnataka.</p>
        </div>
        <div className="content-box">
          <h3>Career Resources</h3>
          <p>Access resources designed to boost employability and help achieve career aspirations.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-container">
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/reports">Reports</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-section footer-contact">
            <h3>Contact</h3>
            <p>KMDC Bhavan, 1st floor, Subedar Choultry Road, Bengaluru-560020</p>
            <p>+91-80-22863400 / 22864204</p>
            <p>secretary@karmin.in</p>
          </div>
          <div className="footer-section policy">
            <h3>Policy</h3>
            <ul>
              <li><Link to="#" onClick={() => openModal('terms')}>Terms And Conditions</Link></li>
              <li><Link to="#" onClick={() => openModal('copyright')}>Copyright Policy</Link></li>
              <li><Link to="#" onClick={() => openModal('privacy')}>Privacy Policy</Link></li>
              <li><Link to="#" onClick={() => openModal('linking')}>External Linking Policy</Link></li>
            </ul>
          </div>
          <div className="footer-section social-media">
            <h3>Social Media</h3>
            <div className="social-icons">
              <a href="https://twitter.com/ksmc_in" aria-label="Twitter">Twitter</a>
              <a href="https://www.facebook.com/profile.php?id=100076970431130" aria-label="Facebook">Facebook</a>
              <a href="https://wa.me/6360704199" aria-label="WhatsApp">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; Karnataka State Minorities Commission {new Date().getFullYear()}, All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Modal */}
      <div id="policyModal" className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={closeModal}>&times;</span>
          <div id="modalText"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
