import React, { Component, useReducer, useState } from 'react'
import BookingForm from './BookingForm'
import { fetchAPI, submitAPI } from '../API/api'
import { useNavigate } from 'react-router-dom'
import '../styles/form.css'

function BookingPage () {
  const navigate = useNavigate()
  const [date, setDate] = useState(new Date())
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  )
  function initializeTimes () {
    let availableTimes = fetchAPI(new Date())
    return availableTimes
  }

  function updateTimes (state, action) {
    //  let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
        // return { availableTimes: state }
        // return { availableTimes: fetchAPI(new Date()) }
        return { ...state, times: fetchAPI(action.date) }
      default:
        return state
    }
  }

  /* function initializeTimes () {
  let availableTimes = fetchAPI(new Date())

  return availableTimes
}
 */

  // const initializeTimes = ['17:00', '18:00']

  /* function updateTimes (state, data) {
    return { availableTimes: fetchAPI(new Date()) }
  }
 */
  function submitForm (e) {
    if (submitAPI(e)) {
      navigate('/Confirmation')
    }
  }

  //const test = 'tesing props'
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
