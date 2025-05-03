import React, { useRef } from 'react';
import '../styles/DestinationSlider.css';

const DestinationSlider = () => {
  const sliderRef = useRef(null);
  const destinations = [
    { id: 1, name: 'Meghalaya', image: 'meghalaya.jpg' },
    { id: 2, name: 'Kashmir', image: 'kashmir.jpg' },
    { id: 3, name: 'Sikkim', image: 'sikkim.jpg' },
    { id: 4, name: 'Nepal', image: 'nepal.jpg' },
    { id: 5, name: 'Himachal', image: 'himachal.jpg' }
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="destination-slider-container">
      <h2 className="section-title">Recommended Trips (Seasonal Trip)</h2>
      <div className="slider-controls">
        <button className="nav-button prev" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="destinations-slider" ref={sliderRef}>
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="circle-image-container">
                <img 
                  src={`/images/${destination.image}`} 
                  alt={destination.name} 
                  className="circle-image"
                />
              </div>
              <h3 className="destination-name">{destination.name}</h3>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default DestinationSlider;