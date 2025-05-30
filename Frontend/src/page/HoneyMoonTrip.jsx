import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import Video from '../components/Video'
import '../styles/HoneyMoonTrip.css'
import AboutHoneymoon from '../components/AboutHoneymoon'
import HoneymoonForm from '../components/HoneymoonForm'
import ContactStickyButton from '../components/ContactStickyButton';
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import WhyTripSquare from '../components/WhyTripSquare '
import EnquiryForm from '../components/EnquiryForm'

const HoneyMoonTrip = () => {
  const phoneNumber = assets.phoneNumber; // Replace with your actual WhatsApp number
  const message = 'Hello, I Want to Book a Honeymoon Trip'; // Default message
  
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const bookButton = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <div>
      <ContactStickyButton />
      <Video path={assets.honeymoonVideo} />
      <Navbar />
      <div className='honeymoon-banner'>
        <p className='Heading-Title'> Honemoon Trip Packages </p>
        <p className="tagline">Where Forever Begins...Together!</p>
        <button onClick={bookButton} className="book-now-btn">Book Now</button>
      </div>
      <AboutHoneymoon />
      <HoneymoonForm />
      <WhyTripSquare />
      <Gallery />
      <EnquiryForm />
      <Footer />
    </div>
  )
}

export default HoneyMoonTrip
