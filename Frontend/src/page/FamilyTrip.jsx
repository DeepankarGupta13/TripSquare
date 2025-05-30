import React, { useEffect } from 'react'
import ContactStickyButton from '../components/ContactStickyButton';
import Navbar from '../components/Navbar'
import { assets, familyTripImages } from '../assets/assets'
import ImageScreen from '../components/ImageScreen'
import AboutFamilyTrip from '../components/AboutFamiltTrip';
import Footer from '../components/Footer';
import WhyTripSquare from '../components/WhyTripSquare ';
import Gallery from '../components/Gallery';
import EnquiryForm from '../components/EnquiryForm';
import AdventurePoster from '../components/AdventurePoster';

const FamilyTrip = () => {
    const phoneNumber = assets.phoneNumber; // Replace with your actual WhatsApp number
    const message = 'Hello, I Want to Book a Family Trip'; // Default message

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
            <ImageScreen path={'https://res.cloudinary.com/dfxgnf8kz/image/upload/v1748115258/x04doayyrg8nhyq3lxzt.jpg'} />
            <Navbar />
            <div className='honeymoon-banner'>
                <p className='Heading-Title'> Family Adventure Packages </p>
                <p className="tagline">Your Family's Next Great Adventure!!!</p>
                <button onClick={bookButton} className="book-now-btn">Book Now</button>
            </div>
            <AboutFamilyTrip />
            <WhyTripSquare />
            <Gallery galleryImages={familyTripImages}/>
            <EnquiryForm tripType='Family'/>
            <AdventurePoster />
            <Footer />
        </div>
    )
}

export default FamilyTrip
