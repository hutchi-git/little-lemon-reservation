import { React, Component, useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom'

import Home from './Home'

import BookingPage from './BookingPage'
import Confirmation from './Confirmation'

function Main () {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Reservation' element={<BookingPage />} />
          <Route path='/Confirmation' element={<Confirmation />} />
        </Routes>
      </main>
    </>
  )
}

export default Main
