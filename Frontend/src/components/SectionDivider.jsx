import React from 'react'
import '../styles/SectionDivider.css'
import { assets } from '../assets/assets'

const SectionDivider = () => {
  return (
    <div className="section-divider">
      <img src={assets.sectionDivider} alt="----------------xxXxx----------------" />
    </div>
  )
}

export default SectionDivider
