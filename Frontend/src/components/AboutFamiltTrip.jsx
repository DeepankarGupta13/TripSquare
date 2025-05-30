import React, { useState } from 'react';
import '../styles/AboutFamilyTrip.css'; // Link to the new CSS file

const AboutFamilyTrip = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="about-family-trip-container">
      <div className="about-family-trip-content">
        <h1 className="about-family-trip-title">About Family Trip Packages</h1>
        <div className={`about-family-trip-text ${expanded ? 'expanded' : ''}`}>
          <p className="intro-paragraph">
            It's time to gather your loved ones and embark on an unforgettable journey! Our Family Trip Packages are designed to create lasting memories and exciting adventures for every member of your family.
          </p>

          {expanded && (
            <>
              <p>
                Imagine days filled with laughter, discovery, and shared experiences. From thrilling outdoor activities to relaxing beach getaways and cultural explorations, we offer a diverse range of destinations and itineraries that cater to all ages and interests.
              </p>
              <p>
                At **TripSquare**, we understand the importance of quality family time. That's why we meticulously craft our packages to ensure a seamless and enjoyable travel experience. We pride ourselves on providing the **best and most affordable family trips**, without compromising on comfort or adventure.
              </p>

              <p>
                Whether you're looking for a quick weekend escape or an extended vacation, TripSquare has something for everyone. We handle the details so you can focus on making incredible memories with your children, parents, and everyone in between.
              </p>

              <p>
                Get ready to bond, explore, and create stories that your family will cherish for years to come. With TripSquare, your dream family adventure is just a click away!
              </p>
            </>
          )}
        </div>

        <button className="toggle-content-btn" onClick={toggleContent}>
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default AboutFamilyTrip;