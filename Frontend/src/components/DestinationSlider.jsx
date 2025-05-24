import React, { useEffect, useRef, useState } from 'react';
import '../styles/DestinationSlider.css';
import { useApi } from '../context/ApiContext';
import { useNavigate } from 'react-router-dom';

const DestinationSlider = () => {
  const { getTrips } = useApi(); // Get the API methods from context
  const [trips, setTrips] = useState([]); // State to store trips
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Hook to navigate to different routes

  const sliderRef = useRef(null);

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
  
  const handleCardClick = (trip) => {
    // Handle the click event for each trip card
    navigate(`/trip/${trip._id}`)
  };

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        let tripsData = await getTrips();
        setTrips(tripsData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTrips();
  }, [getTrips]);

  if (loading) {
    return <div className="scroller-container">Loading trips...</div>;
  }

  if (error) {
    return <div className="scroller-container">Error: {error}</div>;
  }

  if (trips.length === 0) {
    return <div className="scroller-container">No trips available</div>;
  }

  return (
    <div className="destination-slider-container">
      <h2 className="section-title">Recommended Trips (Seasonal Trip)</h2>
      <div className="slider-controls">
        <button className="nav-button prev" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="destinations-slider" ref={sliderRef}>
          {trips.map((destination, index) => (
            <div key={index} className="destination-card" onClick={() => handleCardClick(destination)}>
              <div className="circle-image-container">
                <img
                  src={destination.pic}
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