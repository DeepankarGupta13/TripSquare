import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import HomeVideo from '../components/Video'
// import { useParams } from 'react-router-dom';
// import Map from '../components/Map';
// import TripDetailsBox from '../components/TripDetailsBox';
// import BookingForm from '../components/BookingForm';
// import '../styles/Trip.css';
// import EnquiryForm from '../components/EnquiryForm';
// import PatternGrid from '../components/PatternGrid';
// import ReviewCards from '../components/ReviewCards';
// import HorizontalSlider from '../components/Slider';
// import Footer from '../components/Footer';
// import PickupDrop from '../components/PickupDrop';
// import ContactStickyButton from '../components/ContactStickyButton';
// import { useApi } from '../../context/ApiContext';
// import { assets } from '../assets/assets';

const Trip = () => {
//   const { tripId } = useParams();
//   const [tripData, setTripData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { getTrips } = useApi();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
    
//     const fetchTripData = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // Add a small delay to ensure the API is ready (if needed)
//         const trips = await getTrips(); // Fix the typo here if it's getTrips vs getTrips
        
//         console.log('trips: ', trips);
        
//         if (!trips || !Array.isArray(trips)) {
//           throw new Error('Invalid trips data received');
//         }

//         const foundTrip = trips.find(trip => trip._id === tripId);
//         if (!foundTrip) {
//           throw new Error('Trip not found');
//         }

//         setTripData(foundTrip);
//       } catch (err) {
//         console.error('Error fetching trip data:', err);
//         setError(err.message || 'Failed to load trip details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTripData();
//   }, [tripId, getTrips]); // Added tripId to dependencies

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//         <p>Loading trip details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="error-container">
//         <h2>Error</h2>
//         <p>{error}</p>
//         <button onClick={() => window.location.href = '/'}>Return to Home</button>
//       </div>
//     );
//   }

//   if (!tripData) {
//     return (
//       <div className="not-found-container">
//         <h2>Trip Not Found</h2>
//         <p>The trip you're looking for doesn't exist.</p>
//         <button onClick={() => window.location.href = '/'}>Browse Available Trips</button>
//       </div>
//     );
//   }

  // return (
  //   <div>
//       <ContactStickyButton />
//       <HomeVideo src={assets.homeVideo} />
//       <Navbar />
//       <div className='text-container'>
//         <h1 className='title'>Let's Explore</h1>
//         <h1 className='title'>{tripData.name}</h1>
//         <p className='description'>Pack Your Bags & Your Dreams!</p>
//         <p className='description'>TripSquare Makes Travel Affordable & Amazing</p>
//         <div className='Details-Trip'>
//           <PickupDrop />
//         </div>
//       </div>
//       <Map trips={tripData}/>
//       <div className='span'>
//         <h1 className='top-places-title'>{tripData.name}</h1>
//       </div>
//       <div className="main-content">
//         <TripDetailsBox tripData={tripData} />
//         <div>
//           <EnquiryForm />
//           <BookingForm item={tripData} />
//         </div>
//       </div>
//       <PatternGrid images={tripData.images} />
//       <ReviewCards reviews={tripData.reviews} />
//       <div className='span' style={{ marginTop: '50px' }}>
//         <p className='span slider-title'>Popular Destinations</p>
//       </div>
//       <HorizontalSlider type="top" />
//       <Footer />
//   </div>
// )

return (
  <div></div>
)
}

export default Trip