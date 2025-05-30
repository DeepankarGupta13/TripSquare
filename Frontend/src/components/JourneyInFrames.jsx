import React, { useState, useEffect } from 'react';
import '../styles/JourneyInFrames.css';
import { familyTripImages, privateTripImages } from '../assets/assets';

const JourneyInFrames = () => {
  const photos = [
    {
      url: familyTripImages[0],
      alt: 'Vietnam landscape'
    },
    {
      url: familyTripImages[1],
      alt: 'Dubai skyline'
    },
    {
      url: familyTripImages[2],
      alt: 'Bhutan monastery'
    },
    {
      url: familyTripImages[4],
      alt: 'Kerala backwaters'
    },
    {
      url: familyTripImages[5],
      alt: 'Himalayan mountains'
    },
    {
      url: privateTripImages[0],
      alt: 'Goa beach sunset'
    },
    {
      url: privateTripImages[3],
      alt: 'Adventure trip in New Zealand'
    },
    {
      url: privateTripImages[4],
      alt: 'Private trip in Bali'
    },
    {
      url: privateTripImages[5],
      alt: 'Private trip in Maldives'
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1748641208/IMG_20241101_162539_n2hmtg.jpg',
      alt: '',
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1748641197/IMG_20240501_110248_742_wc8fo3.webp',
      alt: ''
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1748641191/IMG_20231029_160119_377_n4lxwz.webp',
      alt: ''
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1748641196/IMG_20231030_191512_356_mn8ixt.webp',
      alt: ''
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1748641176/iftekhar-nibir-XKCFg-wJx8M-unsplash_lprzfe.jpg',
      alt: ''
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1748641168/amit-gupta-v4YWEXgAFok-unsplash_utvh8y.jpg',
      alt: ''
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
    </div>
  );
};

export default JourneyInFrames;