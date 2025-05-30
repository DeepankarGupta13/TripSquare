import React, { useEffect } from 'react'
import ContactStickyButton from '../components/ContactStickyButton';
import { assets } from '../assets/assets';
import ImageScreen from '../components/ImageScreen';
import Navbar from '../components/Navbar';
import WhyTripSquare from '../components/WhyTripSquare ';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import EnquiryForm from '../components/EnquiryForm';
import BeyondOrdinarySection from '../components/BeyondOrdinarySection';
import AboutCorporateTrip from '../components/AboutCorporateTrip';
import CorporateForm from '../components/CorporateForm';

const CorporateTrip = () => {
    const phoneNumber = assets.phoneNumber; // Replace with your actual WhatsApp number
    const message = 'Hello, I Want to Book a Corporate Trip'; // Default message

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
            <ImageScreen path={assets.CorporateTrip} />
            <Navbar />
            <div className='honeymoon-banner'>
                <p className='Heading-Title'> Corporate Trip Packages </p>
                <div style={{height: '10vh'}}> </div>
                <button onClick={bookButton} className="book-now-btn">Book Now</button>
            </div>
            <AboutCorporateTrip />
            <CorporateForm />
            <WhyTripSquare />
            <BeyondOrdinarySection />
            <EnquiryForm tripType='Corporate' />
            <Footer />
        </div>
    )
}

export default CorporateTrip
