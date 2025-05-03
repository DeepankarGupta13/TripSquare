import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Trip from './page/Trip'
import Checkout from './page/Checkout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trip/:tripId' element={<Trip/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </div>
  )
}

export default App
