import React from 'react';
import '../styles/AdventurePoster.css';
import { assets } from '../assets/assets';

const AdventurePoster = () => {
  const handleContactClick = () => {
    // Replace with your actual WhatsApp number (include country code, remove any spaces or special characters)
    const phoneNumber = assets.phoneNumber; // Example: 911234567890 for India
    const message = 'Hello! I would like to inquire about travel adventures.';
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="adventure-poster">
      <div className="poster-content">
        <h1 className="poster-title">Craving adventure?</h1>
        <p className="poster-subtitle">We'll turn your travel dreams into reality!</p>
        <button className="contact-button" onClick={handleContactClick}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default AdventurePoster;