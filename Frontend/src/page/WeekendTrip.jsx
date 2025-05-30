import React, { useEffect } from 'react'
import ContactStickyButton from '../components/ContactStickyButton';
import { assets, coupleImages } from '../assets/assets';
import ImageScreen from '../components/ImageScreen';
import Navbar from '../components/Navbar';
import TripPage from '../components/TripPage';
import WhyTripSquare from '../components/WhyTripSquare ';
import Footer from '../components/Footer';
import AdventurePoster from '../components/AdventurePoster';
import WeekendGateway from '../components/WeekendGateway';

const WeekendTrip = ({type = 'short'}) => {
    const phoneNumber = assets.phoneNumber; // Replace with your actual WhatsApp number
    const message = 'Hello, I Want to Book a Weekend Trip'; // Default message

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
            <ImageScreen path={type === 'short' ? assets.WeekendTripCover : assets.longWeekTrip} />
            <Navbar />
            <div className='honeymoon-banner'>
                <p className='Heading-Title'> {type === 'short' ? 'Weekend Getaways' : 'Community Trip'} </p>
                <p className="tagline"> {type === 'short' ? 'Weekend Trips from Bangalore' : 'Beyond the Horizon, Into the Journey'} </p>
                <button onClick={bookButton} className="book-now-btn">Book Now</button>
            </div>
            <WeekendGateway />
            <TripPage filter={type === 'short' ? 'weekend' : "long"}/>
            <WhyTripSquare />
            <AdventurePoster />
            <Footer />
        </div>
    )
}

export default WeekendTrip
