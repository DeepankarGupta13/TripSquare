// components/BeyondOrdinarySection.jsx
import React from 'react';
import '../styles/BeyondOrdinarySection.css'; // Import the CSS file
import { assets } from '../assets/assets';

const FeatureCard = ({ iconSrc, title, description, backgroundColor }) => {
  return (
    <div className="feature-card" style={{ backgroundColor: backgroundColor }}>
      <div className="feature-card-icon">
        <img src={iconSrc} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const BeyondOrdinarySection = () => {
  return (
    <section className="beyond-ordinary-section">
      <div className="beyond-ordinary-header">
        <h1>Beyond Ordinary?</h1>
        <p>We're firm believers that business trips should be anything but ordinary.</p>
      </div>

      <div className="feature-cards-grid">
        <FeatureCard
          iconSrc={assets.content} // Replace with actual path
          title="End to End Service"
          description="We've got everything you need from start to finish - the best places to stay, cool guides, smooth rides, and more. Your trip's in good hands!"
          backgroundColor="#FF7F7F" // Approximate color from the image
        />
        <FeatureCard
          iconSrc={assets.visa} // Replace with actual path
          title="No Worries"
          description="You focus on fun planning, and we'll handle all the boring booking stuff."
          backgroundColor="#98B8FF" // Approximate color from the image
        />
        <FeatureCard
          iconSrc={assets.house} // Replace with actual path
          title="Dreamy Stays"
          description="Getting to your dream spots is a breeze. We'll make sure you stay in awesome places."
          backgroundColor="#89E4CE" // Approximate color from the image
        />
        <FeatureCard
          iconSrc={assets.Guide} // Replace with actual path
          title="Local Caption"
          description="Our Caption/Guides on the ground will help you explore the heart of every place you visit."
          backgroundColor="#FFD988" // Approximate color from the image
        />
        <FeatureCard
          iconSrc={assets.camera} // Replace with actual path
          title="Capture Moments"
          description="We've got a team that can help you snap those amazing pics you'll cherish forever."
          backgroundColor="#B392F7" // Approximate color from the image
        />
        <FeatureCard
          iconSrc={assets.Travel} // Replace with actual path
          title="Travel Magic Makers"
          description="We make sure your adventure is not just hassle-free but sprinkled with the pixie dust of unforgettable memories."
          backgroundColor="#D07EE2" // Approximate color from the image
        />
      </div>
    </section>
  );
};

export default BeyondOrdinarySection;