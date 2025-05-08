import React from 'react'
import { assets } from '../assets/assets.js'
import SearchBar from './searchbar'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/')
  }
  
  return (
    <div className='Navbar-Container'>
      <img onClick={handleClick} className="LogoImage" src={assets.logo} alt="logo" width={'120px'} />
      <SearchBar/>
    </div>
  )
}

export default Navbar
