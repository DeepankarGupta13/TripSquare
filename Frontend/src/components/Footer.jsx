import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import '../styles/Footer.css';
import { assets } from '../assets/assets.js';

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
              <span>{assets.email}</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>{assets.phoneNumber}</span>
            </div>
          </div>
        </div>

        <div className="footer-section social">
          <h3 className="footer-title">Follow us</h3>
          <div className="social-icons">
            <a href={assets.instagramLink} className="social-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href={assets.whatsappLink} className="social-link">
              <FaWhatsapp className="social-icon" />
            </a>
            <a href={assets.twitterLink} className="social-link">
              <FaXTwitter className="social-icon" />
            </a>
            <a href={assets.facebookLink} className="social-link">
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TripSquare. All rights reserved.</p>
        <p>GSTIN 17MFXPS7893R1ZB</p>
      </div>
    </footer>
  );
};

export default Footer;
