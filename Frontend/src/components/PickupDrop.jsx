import React, { useState } from 'react';
import '../styles/PickupDrop.css';
import { assets } from '../assets/assets';

const PickupDrop = () => {
  const pickup = 'Guwahati';
  const drop = 'Guwahati';
  const duration = '5D/6N';

  return (
    <>
      <div className="location-Conatiner">
        <img src={assets.pathLogo} alt="" />
        <div className='loacation-details'>
          <div className="location-field">
            <p htmlFor="drop">Pick up: {pickup}</p>
          </div>
          <div className="location-field">
            <p htmlFor="drop">Drop: {drop}</p>
          </div>
        </div>
      </div>
      <div className="location-Conatiner">
        <img src={assets.timeSheet} alt="" />
        <div className='loacation-details'>
          <div className="location-field">
            <p htmlFor="drop">Duration: {duration}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickupDrop;