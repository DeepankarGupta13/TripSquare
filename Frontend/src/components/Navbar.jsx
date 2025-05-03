import React from 'react'
import { assets } from '../assets/assets.js'
import SearchBar from './searchbar'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar-Container'>
      <img className="LogoImage" src={assets.logo} alt="logo" width={'120px'} />
      <SearchBar/>
    </div>
  )
}

export default Navbar
