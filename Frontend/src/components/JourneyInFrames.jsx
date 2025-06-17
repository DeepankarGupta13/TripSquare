import React, { useState, useEffect } from 'react';
import '../styles/JourneyInFrames.css';
import { familyTripImages, privateTripImages } from '../assets/assets';

const JourneyInFrames = () => {
  const photos = [
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750097391/WhatsApp_Image_2025-06-16_at_23.37.35_1_ysbb1h.jpg',
      alt: 'Ooty'
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750097391/WhatsApp_Image_2025-06-16_at_23.37.35_kwbi3d.jpg',
      alt: 'Coorg'
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750097390/WhatsApp_Image_2025-06-16_at_23.37.36_1_wtzr90.jpg',
      alt: 'Kodaikanal'
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750097390/WhatsApp_Image_2025-06-16_at_23.37.36_pve9nr.jpg',
      alt: 'Munnar'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (touchStart - touchEnd > 50) goToNext();
    if (touchStart - touchEnd < -50) goToPrevious();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="slider-container">

      <div className="slider-header">
        <h1 className="slider-title">FRAMING MEMORIES</h1>
        <p className="slider-subtitle">Frames</p>
      </div>

      <div 
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${photo.url})` }}
            aria-hidden={index !== currentIndex}
          >
            <img 
              src={photo.url} 
              alt={photo.alt} 
              className="slide-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <button className="slider-button prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="slider-button next" onClick={goToNext}>
          &#10095;
        </button>
    </div>
  );
};

export default JourneyInFrames;