import React, { Component, useReducer, useState } from 'react'
import BookingForm from './BookingForm'
import { fetchAPI, submitAPI } from '../API/api'
import { useNavigate } from 'react-router-dom'
import { initializeTimes, updateTimes, submitForm } from '../utils/utils'

import '../styles/form.css'

function BookingPage () {
  const navigate = useNavigate()
  const [date, setDate] = useState(new Date())
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  )

  const submitForm = e => {
    if (submitAPI(e)) {
      navigate('/Confirmation')
    }
  }

  return (
    <div id='Booking'>
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  )
}

export default BookingPage
