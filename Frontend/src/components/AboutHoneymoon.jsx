import React, { useState } from 'react';
import '../styles/AboutHoneymoon.css';

const AboutHoneymoon = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="about-honeymoon-container">
      <div className="about-honeymoon-content">
        <h1 className="about-honeymoon-title">About Honeymoon Packages</h1>
        <div className={`about-honeymoon-text ${expanded ? 'expanded' : ''}`}>
          <p className="intro-paragraph">
            This is your sign to pack your bags and say yes to a beautiful 'forever' with our Honeymoon Packages for couples! Love is in the air, and it's time to celebrate your newfound love with your forever person.
          </p>
          
          {expanded && (
            <>
              <p>
                Just imagine this: a sunset view, your loved one by your side, and a toast to the many joyful years to come. Sounds like a dream, doesn't it? Well, it's not going to be just a dream because we're here to turn this dream into a reality!
              </p>
              <p>
                Have the most romantic honeymoon tour with our best honeymoon packages in India and abroad, allowing you to treat your eyes to some stunning views, bask in the golden sunsets, wake up to the soothing sound of the waves, stay in the lap of luxury villas or suites that will elevate your honeymoon to a new height of sophistication.
              </p>
              
              <p>
                You are special, and there is no reason why your honeymoon shouldn't be. So get ready because our romantic honeymoon packages are going to take you to the most memorable holiday of your life that you are going to cherish for the years to come.
              </p>
              
              <p>
                You may be into adventure honeymoon trips or leisure honeymoon trips, and in both cases, our romantic honeymoon packages for couples will take you on a journey of a lifetime.
              </p>
            </>
          )}
        </div>
        
        <button className="toggle-content-btn" onClick={toggleContent}>
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default AboutHoneymoon;