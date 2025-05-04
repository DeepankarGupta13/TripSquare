import React, { useState } from 'react';
import '../styles/PickupDrop.css';

const PickupDrop = () => {
  const pickup = 'Guwahati';
  const drop = 'Guwahati';
  const [isSameLocation, setIsSameLocation] = useState(true);

  const handlePickupChange = (e) => {
    setPickup(e.target.value);
    if (isSameLocation) {
      setDrop(e.target.value);
    }
  };

  const handleDropChange = (e) => {
    setDrop(e.target.value);
  };

  const toggleSameLocation = () => {
    setIsSameLocation(!isSameLocation);
    if (!isSameLocation) {
      setDrop(pickup);
    }
  };

  return (
    <div className="location-selector">
      <div className="location-field">
        <p htmlFor="drop">Pick up: { pickup }</p>
      </div>
      <div className="location-field">
        <p htmlFor="drop">Drop: { drop }</p>
      </div>
    </div>
  );
};

export default PickupDrop;