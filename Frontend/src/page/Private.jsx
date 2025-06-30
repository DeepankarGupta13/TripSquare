import React, { useEffect, useState } from 'react'
import ContactStickyButton from '../components/ContactStickyButton'
import { useParams } from 'react-router-dom';
import { useApi } from '../context/ApiContext';
import ImageScreen from '../components/ImageScreen';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AndamanPrivateTrip from '../components/AndamanDetails';
import Gallery from '../components/Gallery';
import PrivateTripForm from '../components/PrivateTripForm';
import AboutPrivateTrips from '../components/AboutPrivateTrip';
import WhyTripSquare from '../components/WhyTripSquare ';
import SectionDivider from '../components/SectionDivider';

const Private = () => {
  const { tripId } = useParams();
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getTrips } = useApi();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchTripData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Add a small delay to ensure the API is ready (if needed)
        const trips = await getTrips();

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
  }, [tripId]);

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
      <ImageScreen path={tripData.images[8]} />
      <Navbar />
      <div className='honeymoon-banner'>
        <p className='Heading-Title' > {tripData.name} </p>
        <p className='Description-text descriptio-private-text' style={{margin: '0px 30px', marginTop: '30px' }}>{tripData.description}</p>
        <div style={{ height: '0px' }}> </div>
        <button onClick={() => window.open(`https://wa.me/${assets.phoneNumber}?text=Hello, I Want to Book a Private Trip`, '_blank')} className="book-now-btn">Book Now</button>
      </div>
      { tripData.name.includes('Andaman') ? <AndamanPrivateTrip /> : <AboutPrivateTrips /> }
      <PrivateTripForm destination={tripData.name}/>
      <WhyTripSquare />
      <Gallery galleryImages={tripData.images}/>
      <SectionDivider />
      <Footer />
    </div>
  )
}

export default Private
