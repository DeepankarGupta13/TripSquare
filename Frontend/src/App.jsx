import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Trip from './page/Trip'
import Checkout from './page/Checkout'
import { ToastContainer } from 'react-toastify';
import HoneyMoonTrip from './page/HoneyMoonTrip'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trip/:tripId' element={<Trip/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/honeymoon-trip' element={<HoneyMoonTrip/>} />
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
