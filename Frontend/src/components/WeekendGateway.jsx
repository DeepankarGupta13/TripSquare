import React from 'react';
import '../styles/WeekendGateway.css'; // Import the CSS file

const WeekendGateway = () => {
  return (
    <div className="weekend-gateway-container">
      <h2 className="main-title">Weekend Getaways From Bangalore</h2>
      <div className="features-grid">
        <div className="feature-item">
          {/* Placeholder for icon - In a real app, you'd use an SVG or an icon library */}
          <div className="icon-placeholder">
            <p className='icon-weekend-gateway'>🤝</p>
          </div>
          <p className="feature-text">Top Notch Hospitality</p>
        </div>
        <div className="feature-item">
          {/* Placeholder for icon */}
          <div className="icon-placeholder">
            <p className='icon-weekend-gateway'>🏘️</p>
          </div>
          <p className="feature-text">Beautiful Handpicked Stays</p>
        </div>
        <div className="feature-item">
          {/* Placeholder for icon */}
          <div className="icon-placeholder">
            <p className='icon-weekend-gateway'>👮‍♂️</p>
          </div>
          <p className="feature-text">Fun Team Captains</p>
        </div>
      </div>
    </div>
  );
};

export default WeekendGateway;
