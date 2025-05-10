import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import TripDetails from '../components/TripDetails';
import BookingForm from '../components/BookingForm';
import '../styles/Trip.css';
// import EnquiryForm from '../components/EnquiryForm';
import PatternGrid from '../components/PatternGrid';
import HorizontalSlider from '../components/Slider';
import Footer from '../components/Footer';
import PickupDrop from '../components/PickupDrop';
import ContactStickyButton from '../components/ContactStickyButton';
import { useApi } from '../context/ApiContext';
// import { assets } from '../assets/assets';
import Map from '../components/Map';
import Video from '../components/Video';
import ReviewCards from '../components/ReviewCards';

const Trip = () => {
  const { tripId } = useParams();
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getTrips } = useApi(); // Get the API method

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchTripData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Add a small delay to ensure the API is ready (if needed)
        const trips = await getTrips(); // Fix the typo here if it's getTrips vs getTrips

        if (!trips || !Array.isArray(trips)) {
          throw new Error('Invalid trips data received');
        }

        const foundTrip = trips.find(trip => trip._id === tripId);
        if (!foundTrip) {
          throw new Error('Trip not found');
        }
        else {
          setTripData(foundTrip);
        }

      } catch (err) {
        console.error('Error fetching trip data:', err);
        setError(err.message || 'Failed to load trip details');
      } finally {
        setLoading(false);
      }
    };

    fetchTripData();
  }, [tripId]); // Added tripId to dependencies

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading trip details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.href = '/'}>Return to Home</button>
      </div>
    );
  }

  if (!tripData) {
    return (
      <div className="not-found-container">
        <h2>Trip Not Found</h2>
        <p>The trip you're looking for doesn't exist.</p>
        <button onClick={() => window.location.href = '/'}>Browse Available Trips</button>
      </div>
    );
  }

  return (
    <div>
      <ContactStickyButton />
      <Video />
      <Navbar />
      <div className='Text-Conatiner'>
        <p className='Title-text'>Let's Explore </p>
        <p className='Title-text'>{tripData.name}</p>
        <p className='Description-text'>Pack Your Bags & Your Dreams!</p>
        <p className='Description-text'>TripSquare Makes Travel Affordable & Amazing</p>
        <div className='Details-Trip'>
          <PickupDrop tripData={tripData} />
        </div>
      </div>
      <Map trips={tripData} />
      <div className='span'>
        <h1 className='top-places-title'>{tripData.name}</h1>
      </div>
      <div className="main-content">
        <TripDetails tripData={tripData} />
        <div>
          {/* <EnquiryForm /> */}
          <BookingForm item={tripData} />
        </div>
      </div>
      <PatternGrid images={tripData.images} />
      <ReviewCards reviews={tripData.reviews} />
      <div className='span' style={{ marginTop: '50px' }}>
        <p className='span Title-text' style={{ color: 'black' }}>Popular Destinations</p>
      </div>
      <HorizontalSlider />
      <Footer />
    </div>
  )

  // return (
  //   <div></div>
  // )
}

export default Trip