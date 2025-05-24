import React from 'react'
import { assets } from '../assets/assets.js'
import SearchBar from './SearchBar'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/')
  }
  
  return (
    <div className='Navbar-Container'>
      <div className="logo-container" onClick={handleClick}>
        <img className="LogoImage" src={assets.logo} alt="logo" width={'120px'} />
        <span className="logo-text">Trip Square</span>
      </div>
      <SearchBar/>
    </div>
  )
}

export default Navbar