import React, { useState, useEffect } from 'react';
import '../styles/JourneyInFrames.css';

const JourneyInFrames = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'Vietnam landscape'
    },
    {
      url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'Dubai skyline'
    },
    {
      url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'Bhutan monastery'
    },
    {
      url: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'Kerala backwaters'
    }
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
        <h1 className="slider-title">JOURNEY IN FRAMES</h1>
        <p className="slider-subtitle">Pictures Perfect Moments</p>
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
        
        <button className="slider-button prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="slider-button next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      
      <div className="dots-container">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyInFrames;