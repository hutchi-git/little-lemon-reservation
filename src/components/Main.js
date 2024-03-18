import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import Home from './Home'

import Booking from './Booking'

export default class Main extends Component {
  render () {
    return (
      <>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Reservation' element={<Booking />} />
          </Routes>
        </main>
      </>
    )
  }
}
