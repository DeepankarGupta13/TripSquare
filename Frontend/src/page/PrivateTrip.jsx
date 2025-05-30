import React from 'react'
import { assets, privateTripImages } from '../assets/assets'
import Navbar from '../components/Navbar'
import ContactStickyButton from '../components/ContactStickyButton'
import ImageScreen from '../components/ImageScreen'
import Footer from '../components/Footer'
import AboutPrivateTrips from '../components/AboutPrivateTrip'
import Gallery from '../components/Gallery'
import WhyTripSquare from '../components/WhyTripSquare '
import EnquiryForm from '../components/EnquiryForm'
import PrivateTripForm from '../components/PrivateTripForm'

const PrivateTrip = () => {
  return (
    <div>
      <ContactStickyButton />
      <ImageScreen path={assets.privateTrip} />
      <Navbar />
      <div className='honeymoon-banner'>
        <p className='Heading-Title'> Private Trip Packages </p>
        <div style={{ height: '10vh' }}> </div>
        <button onClick={() => window.open(`https://wa.me/${assets.phoneNumber}?text=Hello, I Want to Book a Private Trip`, '_blank')} className="book-now-btn">Book Now</button>
      </div>
      <AboutPrivateTrips />
      <PrivateTripForm />
      <WhyTripSquare />
      <Gallery galleryImages={privateTripImages}/>
      <EnquiryForm tripType='Private' />
      <Footer />
    </div>
  )
}

export default PrivateTrip
