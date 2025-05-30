import React, { useState, useRef, useEffect } from 'react';
import '../styles/ExploreSection.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { assets, coupleImages } from '../assets/assets';

// Main App component
export default function App() {
  return (
    <div className="app-container">
      <ExploreSection />
    </div>
  );
}

// ExploreSection component to display the various trip options with a slider
function ExploreSection() {
  const sliderRef = useRef(null); // Reference to the slider container
  const [isDragging, setIsDragging] = useState(false); // State to track if dragging
  const [startX, setStartX] = useState(0); // Initial mouse/touch X position
  const [scrollLeft, setScrollLeft] = useState(0); // Initial scroll position of the slider
  const navigate = useNavigate();
  const [seasonText, setSeasonText] = useState(''); // State for the season text

  // Mouse/Touch start event handler
  const handleStart = (e) => {
    setIsDragging(true);
    // Get the X coordinate, handling both mouse and touch events
    setStartX(e.pageX || e.touches[0].pageX);
    // Get the current scroll position of the slider
    setScrollLeft(sliderRef.current.scrollLeft);
    // Add event listeners for moving and ending the drag
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);
  };

  // Mouse/Touch move event handler
  const handleMove = (e) => {
    if (!isDragging) return; // Only process if dragging
    e.preventDefault(); // Prevent default browser actions (like text selection or page scroll)

    // Calculate the distance moved
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX); // Distance moved horizontally

    // Update the scroll position of the slider
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Mouse/Touch end event handler
  const handleEnd = () => {
    setIsDragging(false);
    // Remove event listeners
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleEnd);
  };

  // Clean up event listeners when component unmounts
  useEffect(() => {
    function getCurrentSeason() {
      const month = new Date().getMonth() + 1; // getMonth() is 0-indexed
      if (month >= 2 && month <= 3) return 'Spring';
      if (month >= 4 && month <= 5) return 'Summer';
      if (month >= 6 && month <= 9) return 'Monsoon';
      return 'Winter';
    }
    setSeasonText(getCurrentSeason());
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  // Function to scroll the slider left
  const scrollSliderLeft = () => {
    if (sliderRef.current) {
      // Scroll by the width of one card (approx. 300px + gap)
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Function to scroll the slider right
  const scrollSliderRight = () => {
    if (sliderRef.current) {
      // Scroll by the width of one card (approx. 300px + gap)
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="explore-section-wrapper">
      {/* Section Title */}
      <h2 className="section-title">Explore</h2>

      {/* Slider Container */}
      <div className="slider-container-explore">
        {/* Left Navigation Button */}
        {/* <button className="slider-nav-button slider-nav-left" onClick={scrollSliderLeft}> */}
          {/* &#10094; Left arrow character */}
        {/* </button> */}

        {/* Cards Grid (Slider Content) */}
        <div
          className="cards-grid"
          ref={sliderRef}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseUp={handleEnd}
          onTouchEnd={handleEnd}
          onMouseLeave={handleEnd} // End drag if mouse leaves the slider area
        >
          {/* "This Summer Season" Card */}
          <div className="summer-season-card">
            {/* Background pattern - mimicking the wavy lines */}
            <div className="summer-season-card-background" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000\' fill-opacity=\'.1\'%3E%3Cpath d=\'M36 34.5L25.5 45l-10.5-10.5L4.5 45 15 55.5l10.5-10.5L36 55.5 46.5 45l-10.5-10.5zM4.5 34.5L15 45l10.5-10.5L36 45 46.5 55.5l-10.5-10.5L25.5 55.5 15 45 4.5 55.5zM36 4.5L25.5 15l-10.5-10.5L4.5 15 15 25.5l10.5-10.5L36 25.5 46.5 15l-10.5-10.5zM4.5 4.5L15 15l10.5-10.5L36 15 46.5 25.5l-10.5-10.5L25.5 25.5 15 15 4.5 25.5z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '80px 80px',
              transform: 'rotate(20deg) scale(2)'
            }}></div>
            <div className="summer-season-card-content">
              <p className="summer-season-text-small">THIS</p>
              <p className="summer-season-text-large">{ seasonText }</p>
              <p className="summer-season-text-small">SEASON</p>
            </div>
          </div>

          {/* Group Trips Card */}
          <TripCard
            imageUrl="https://res.cloudinary.com/dfxgnf8kz/image/upload/v1746968217/cgwkdjr1sd5x4k3odhmi.jpg"
            title="Weekend Trips"
          />
          <TripCard
            imageUrl="https://res.cloudinary.com/dfxgnf8kz/image/upload/v1748115258/txrlv9hxbsl7aymxk24j.jpg"
            title="Long week Trips"
          />
          <TripCard
            imageUrl="https://res.cloudinary.com/dfxgnf8kz/image/upload/v1748115258/x04doayyrg8nhyq3lxzt.jpg"
            title="Family Trips"
          />

          {/* International Trips Card (now Honeymoon Trips) */}
          <TripCard
            func={() => navigate('/honeymoon-trip')}
            imageUrl={coupleImages[5]}
            title="Honeymoon Trips"
          />

          {/* Explore Card */}
          <TripCard
            imageUrl={assets.teamOutting}
            title="Coorporate Trips"
          />
          
          {/* Explore Card */}
          <TripCard
            imageUrl={assets.privateTrip}
            title="Private Trips"
          />
        </div>

        {/* Right Navigation Button */}
        {/* <button className="slider-nav-button slider-nav-right" onClick={scrollSliderRight}> */}
          {/* &#10095; Right arrow character */}
        {/* </button> */}
      </div>
    </div>
  );
}

// Reusable TripCard component
function TripCard({ imageUrl, title, func }) { // Accept 'func' prop
  return (
    <div className="trip-card" onClick={func}> {/* Apply 'func' as onClick handler */}
      {/* Image with fallback */}
      <img
        src={imageUrl}
        alt={title}
        className="trip-card-image"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = "https://placehold.co/400x250/A0AEC0/ffffff?text=Image+Error"; // Fallback image
        }}
      />
      {/* Card Title */}
      <div className="trip-card-title-container">
        <p className="trip-card-title">{title}</p>
      </div>
    </div>
  );
}
