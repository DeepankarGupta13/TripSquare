import React, { useState, useEffect, useRef } from 'react';
import '../styles/Gallery.css';
import { coupleImages } from '../assets/assets';

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust breakpoint
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Array of image data
  const images = [
    {
      src: coupleImages[5],
      alt: "Couple by Waterfall",
      featured: true,
    },
    {
      src: coupleImages[0],
      alt: "Couple Walking",
      featured: false,
    },
    {
      src: coupleImages[2],
      alt: "Couple Laughing",
      featured: false,
    },
    {
      src: coupleImages[3],
      alt: "Couple on Beach",
      featured: false,
    },
    {
      src: coupleImages[4],
      alt: "Couple in Field",
      featured: false,
    },
    {
      src: coupleImages[1],
      alt: "Couple Posing",
      featured: false,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setCurrentSlide(0); // Reset slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  // Touch event handlers for swiping
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50; // Minimum distance to register a swipe

    if (touchStartX.current - touchEndX.current > minSwipeDistance) {
      // Swiped left
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > minSwipeDistance) {
      // Swiped right
      prevSlide();
    }
    // Reset touch coordinates
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="container">
      {/* Gallery Header */}
      <header className="header-container">
        <h1 className="gallery-title">Gallery</h1>
        <p className="gallery-subtitle">Best Moments!</p>
        <div className="header-underline"></div>
      </header>

      {/* Image Display based on device */}
      {isMobile ? (
        // Mobile Slider View
        <div
          className="slider-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="slider-content"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="slider-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="slider-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Not+Found";
                  }}
                />
              </div>
            ))}
          </div>

          {/* Dots Navigation (Optional) */}
          <div className="slider-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      ) : (
        // Desktop Grid View
        <div className="image-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-card ${image.featured ? 'featured' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="image-element"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Not+Found";
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}