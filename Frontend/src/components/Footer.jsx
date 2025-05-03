import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            At TripSquare, we craft affordable, unforgettable journeys across India. 
            From serene hills to vibrant cities, we turn travel dreams into reality—creating 
            memories that last a lifetime. Explore with us!
          </p>
        </div>

        <div className="footer-section contact">
          <h3 className="footer-title">Contact us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>abc@tripsquares.com</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>98xxxxxx67</span>
            </div>
          </div>
        </div>

        <div className="footer-section social">
          <h3 className="footer-title">Follow us</h3>
          <div className="social-icons">
            <a href="#" className="social-link">
              <FaFacebook className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TripSquare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;