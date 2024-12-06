import React, { useState } from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const toggleMenu = () => {
        document.querySelector('.menu').classList.toggle('show');
    };

    const closeModal = () => {
        document.getElementById('policyModal').style.display = 'none';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.sendForm(
            'service_7dfvwog', // Your EmailJS service ID
            'template_pij0a8v', // Your EmailJS template ID
            e.target,
            'Uy7Wq6mzb7zwbLn3s' // Your EmailJS user ID
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            alert('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Error sending email:', error.text);
            alert('Something went wrong, please try again.');
        });
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

            <main>
                <section className="contact-info">
                    <h2>Contact For Any Query</h2>
                    <div className="contact-container">
                        <div className="contact-details">
                            <h3>Get In Touch</h3>
                            <p>Karnataka State Minorities Commission.</p>
                            <div className="contact-item">
                                <span>Office</span>
                                <p>KMDC Bhavan 1st floor, No:39-181, Subedar Choultry Road, Sheshadripuram Bengaluru-560020</p>
                            </div>
                            <div className="contact-item">
                                <span>Landline</span>
                                <p>+91-80-22863400 / 22864204</p>
                            </div>
                            <div className="contact-item">
                                <span>Mobile</span>
                                <p>+91 6360704199</p>
                            </div>
                            <div className="contact-item">
                                <span>Email</span>
                                <p>secretary@karmin.in</p>
                            </div>
                        </div>

                        <section className="location-section">
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.757910115914!2d77.57142767415478!3d12.987330014535132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17921f6318db%3A0xb1b4afebcf412691!2sKMDC%20BHAVAN!5e0!3m2!1sen!2sin!4v1730995613673!5m2!1sen!2sin"
                                    width="100%"
                                    height="340"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </section>

                        <div className="contact-form">
                            <form id="contactForm" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    // pattern="^[A-Z][a-zA-Z\s]*$"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input
                                    type="tel"
                                    name="mobile"
                                    pattern="[0-9]{10}"
                                    required
                                    placeholder="Mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-container">
                    <div className="footer-section quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="aboutus.html">About Us</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section footer-contact">
                        <h3>Contact</h3>
                        <p>KMDC Bhavan 1st floor, No:39-181, Subedar Choultry Road, Sheshadripuram Bengaluru-560020</p>
                        <p>+91-80-22863400 / 22864204</p>
                        <p>secretary@karmin.in</p>
                    </div>
                    <div className="footer-section policy">
                        <h3>Policy</h3>
                        <ul>
                            <li><a href="#" onClick={() => alert('Terms and Conditions')}>Terms And Conditions</a></li>
                            <li><a href="#" onClick={() => alert('Copyright Policy')}>Copywrite Policy</a></li>
                            <li><a href="#" onClick={() => alert('Privacy Policy')}>Privacy Policy</a></li>
                            <li><a href="#" onClick={() => alert('External Linking Policy')}>External Linking Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-section social-media">
                        <h3>Social Media</h3>
                        <div className="social-icons">
                            <a href="https://twitter.com/ksmc_in" aria-label="Twitter"><i className="fab fa-twitter"></i> Twitter</a>
                            <a href="https://www.facebook.com/profile.php?id=100076970431130" aria-label="Facebook"><i className="fab fa-facebook-f"></i> Facebook</a>
                            <a href="https://wa.me/6360704199" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; Karnataka State Minorities Commission {new Date().getFullYear()}, All Rights Reserved.</p>
                </div>
            </footer>

            <div id="policyModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <span className="close-btn" onClick={closeModal}>&times;</span>
                    <div id="modalText"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
