import React from 'react';
import '../styles/DestinationsGrid.css'; // Assuming you'll create this CSS file for styling

const destinations = [
  {
    name: 'Kashmir',
    tagline: 'Paradise on Earth',
    imageSrc: 'path/to/kashmir-image.jpg', // Replace with actual image path
  },
  {
    name: 'Andaman',
    tagline: 'Where Adventure & Serenity Unite',
    imageSrc: 'path/to/andaman-image.jpg', // Replace with actual image path
  },
  {
    name: 'Kerala',
    tagline: "God's Own Country",
    imageSrc: 'path/to/kerala-image.jpg', // Replace with actual image path
  },
  {
    name: 'Himachal',
    tagline: 'Trek, Explore, Repeat', // The image shows "Himachal Backpacking Trips"
    imageSrc: 'path/to/himachal-image.jpg', // Replace with actual image path
  },
];

const DestinationsGrid = () => {
  return (
    <>
      <div className='DestinationsGrid-banner'>
        <p className='DestinationsGrid-Title'> Your Love Story, Our Destinations! </p>
      </div>
      <div className="travel-destinations-container">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <div className="destination-image-wrapper">
              <img
                src={destination.imageSrc}
                alt={destination.name}
                className="destination-image"
              />
              <div className="destination-overlay">
                <p className="destination-tagline">{destination.tagline}</p>
                <h3 className="destination-name">{destination.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DestinationsGrid;