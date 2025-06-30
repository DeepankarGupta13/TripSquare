import React, { useState, useEffect } from 'react';
import '../styles/JourneyInFrames.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { familyTripImages, privateTripImages } from '../assets/assets';

const JourneyInFrames = () => {
  const photos = [
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750621536/Black_and_White_Space_Blank_Document_12_akaaux.png',
      alt: 'Rajasthan'
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750621535/Black_and_White_Space_Blank_Document_3_y7ygu1.png',
      alt: 'Hampi'
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750097390/WhatsApp_Image_2025-06-16_at_23.37.36_pve9nr.jpg',
      alt: 'Munnar'
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750621533/Black_and_White_Space_Blank_Document_likmv4.png',
      alt: 'Kerela'
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750621532/Black_and_White_Space_Blank_Document_6_tlgs0g.png',
      alt: 'Sikkim'
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750622168/Black_and_White_Space_Blank_Document_4_j7udec.png',
      alt: 'Hampi',
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750621535/Black_and_White_Space_Blank_Document_7_czuhx4.png',
      alt: 'Sikkim',
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750621531/Black_and_White_Space_Blank_Document_13_bl1dxj.png',
      alt: 'Gokarna',
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750622196/Black_and_White_Space_Blank_Document_9_xkmdsq.png',
      alt: 'Hampi',
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750622207/Black_and_White_Space_Blank_Document_14_twm9uv.png',
      alt: 'Rajasthan',
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750621532/Black_and_White_Space_Blank_Document_1_rblrgh.png',
      alt: 'Jaipur',
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750621532/Black_and_White_Space_Blank_Document_2_aon9es.png',
      alt: 'Pondicherry',
    },
    {
      url: 'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1750622172/Black_and_White_Space_Blank_Document_5_ofxzfv.png',
      alt: 'Hampi',
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
        <h1 className="slider-title"><span className="underline-image">FRAMING MEMORIES</span></h1>
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
            <div className="caption">
              <span><FaMapMarkerAlt style={{ marginRight: '6px' }} />{photo.alt}</span>
            </div>
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