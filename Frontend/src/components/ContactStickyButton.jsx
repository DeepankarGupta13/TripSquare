import React from 'react';
import { assets } from '../assets/assets';
import '../styles/ContactStickyButton.css';

const WhatsAppButton = () => {
  const phoneNumber = assets.phoneNumber; // Replace with your actual WhatsApp number
  const message = 'Hello, I need help with my booking!'; // Default message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-button-container">
      <div className="whatsapp-button" onClick={handleClick}>
        <img src={assets.whatsappIcon} alt="WhatsApp" />
        <span className='chatText'>Chat with us</span>
      </div>
    </div>
  );
};

export default WhatsAppButton;