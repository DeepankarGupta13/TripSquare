import React from 'react'
import Navbar from '../components/navbar'
import Video from '../components/video'
import Map from '../components/map'
import Footer from '../components/Footer'
import '../styles/Home.css'
import HorizontalSlider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Video />
      <Navbar />
      <Map />
      <div className='Text-Conatiner'>
        <p className='Title-text'> Come Let's Explore </p>
        <p className='Description-text'>Pack Your Bags & Your Dreams! TripSquare Makes Travel Affordable & Amazing</p>
      </div>
      <div className='span'>
        <p className='Title-text black-text'>Top Destinations</p>
      </div>
      <HorizontalSlider/>
      <Footer />
    </div>
  )
}

export default Home
