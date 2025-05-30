import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Trip from './page/Trip'
import Checkout from './page/Checkout'
import { ToastContainer } from 'react-toastify';
import HoneyMoonTrip from './page/HoneyMoonTrip'
import WeekendTrip from './page/WeekendTrip'
import FamilyTrip from './page/FamilyTrip'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trip/:tripId' element={<Trip/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/honeymoon-trip' element={<HoneyMoonTrip/>} />
        <Route path='/weekend-trip' element={<WeekendTrip/>} />
        <Route path='/long-trip' element={<WeekendTrip type='long'/>} />
        <Route path='/family-trip' element={<FamilyTrip />} />
      </Routes>
    </div>
  )
}

export default App

// TestRouter.jsx
// import { BrowserRouter } from 'react-router-dom';

// export default function Test() {
//   return <BrowserRouter>Test</BrowserRouter>;
// }
