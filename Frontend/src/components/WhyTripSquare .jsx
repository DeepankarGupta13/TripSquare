import React, { useState, useEffect } from 'react';
import '../styles/WhyTripSquare.css';

const WhyTripSquare = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Transparency & Security',
      description: 'Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!'
    },
    {
      icon: '👥',
      title: 'Co-Travelers Filtering',
      description: 'Multi-step filtering to bring only like-minded people together! That\'s our key to have fuss-free trips!'
    },
    {
      icon: '✨',
      title: 'One Stop Hassle Free Experience',
      description: 'Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!'
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'All our trips follow strict safety protocols with certified equipment and trained professionals.'
    },
    {
      icon: '🌍',
      title: 'Eco-Friendly',
      description: 'We prioritize sustainable travel practices to minimize our environmental impact.'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Direct partnerships with service providers ensure you get the best prices without middlemen.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const cardWidth = 280;
  const cardGap = 30;

  // Calculate number of slides based on window width
  const calculateVisibleCards = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(calculateVisibleCards());
      // Reset to first slide to prevent empty space
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total slides
  const totalSlides = Math.max(features.length, 1);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Calculate transform for slider track
  const getTransform = () => {
    // On small screens where all cards fit, don't transform
    if (features.length <= visibleCards) return 0;
    return -currentSlide * (cardWidth + cardGap);
  };

  return (
    <div className="why-tripsquare-container">
      <div className="why-tripsquare-header">
        <h1 className="why-tripsquare-title"><span className="underline-image">Why Trip Square?</span></h1>
        <p className="why-tripsquare-subtitle ans">TripSquare is not just a travel service,
          It’s a smart travel companion. We help travelers find experiences tailored to their interests, time, and budget, making every journey uniquely</p>
          <p className="why-tripsquare-subtitle ans" >Magical Moments</p>
      </div>

      <div className="slider-container">
        <button className="slider-arrow left-arrow" onClick={prevSlide}>&#10094;</button>
        
        <div className="slider-track-container">
          <div 
            className="slider-track" 
            style={{ 
              transform: `translateX(${getTransform()}px)`,
            }}
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <button className="slider-arrow right-arrow" onClick={nextSlide}>&#10095;</button>
      </div>

      {totalSlides > 1 && (
        <div className="slider-dots-whyTS">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WhyTripSquare;