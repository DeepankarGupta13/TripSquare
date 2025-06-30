import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Map from '../components/Map'
import Footer from '../components/Footer'
import '../styles/Home.css'
import DestinationSlider from '../components/DestinationSlider'
import AdventurePoster from '../components/AdventurePoster'
import TripPage from '../components/TripPage'
import JourneyInFrames from '../components/JourneyInFrames'
import WhyTripSquare from '../components/WhyTripSquare '
import ExploreSection from '../components/ExploreSection'
import SectionDivider from '../components/SectionDivider'

const Home = () => {
  return (
    <div>
      <Video />
      <Navbar />
      <Map />
      <div className='Text-Conatiner-1'>
        <p className='Title-text-big'> Come </p>
        <p className='Title-text-big'> Let's Explore </p>
        <p className='Description-text-big'>Pack Your Bags & Your Dreams! TripSquare Makes Travel Affordable & Amazing</p>
      </div>
      <div className='span'>
        <p className='Title-text black-text'> <span className="underline-image">Top Destinations</span> </p>
      </div>
      <TripPage />
      <DestinationSlider/>
      <ExploreSection />
      <SectionDivider />
      <WhyTripSquare />
      <AdventurePoster/>
      <JourneyInFrames />
      <Footer />
    </div>
  )
}

export default Home
