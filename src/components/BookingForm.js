import React, { Component, useState } from 'react'
import '../styles/form.css'

function BookingForm ({ availableTimes, dispatch, submitForm }) {
  // const availableTimes[] = availableTimes

  const [formData, SetFormData] = useState({
    fullName: '',
    diners: '',
    eventDate: '',
    time: '',
    occasion: ''
  })

  const [errors, setErrors] = useState({})
  const occasionArr = ['Birthday', 'Anniversay', 'Engagement']

  const handleChange = event => {
    // let isValid = true;
    //  const newErrors = {};

    const { name, value } = event.target

    SetFormData({ ...formData, [name]: value })

    if (formData.eventDate) {
      console.log('testing update time: ' + formData.eventDate)
      dispatch({ type: 'UPDATE_TIMES' })
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    submitForm(event)
  }

  const validate = () => {
    let errorList = {}
    let isValid = true

    if (!formData.fullName) {
      errorList.fullName = 'Full name is required'
      isValid = false
    }
    if (!formData.diners) {
      errorList.diners = 'please enter the number of diners'
      isValid = false
    } else if (formData.diners > 30 || formData < 1) {
      errorList.diners = 'number of diners must be between 1 and 30'
      isValid = false
    }

    setErrors(errorList)
    return isValid
  }

  return (
    <>
      <section id='Form'>
        <h2>Make A Reservation</h2>
        <div className='Form'>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className='Field'>
                <label htmlFor='fullName'>
                  Full Name <sup>*</sup>
                </label>
                <input
                  id='fullName'
                  name='fullName'
                  value={FormData.fullName}
                  onChange={handleChange}
                  onBlur={validate}
                  type='text'
                  required
                />
                <p>{errors.fullName}</p>
              </div>

              <div className='Field'>
                <label htmlFor='diners'>Number of Diners</label>
                <input
                  id='diners'
                  type='number'
                  name='diners'
                  value={FormData.diners}
                  onChange={handleChange}
                  onBlur={validate}
                  min={1}
                  max={30}
                  required
                />
                <p>{errors.diners}</p>
              </div>
              <div className='Field'>
                <label htmlFor='eventDate'>Date Of Event</label>
                <input
                  id='eventDate'
                  type='date'
                  name='eventDate'
                  value={FormData.eventDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='Field'>
                <label htmlFor='availableTimes'>Time Of Event</label>

                <select
                  id='availableTimes'
                  name='time'
                  value={FormData.time}
                  onChange={handleChange}
                  required
                >
                  {availableTimes.map(time => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div className='Field'>
                <label htmlFor='occasion'>
                  Occasion
                  <sup>*</sup>
                </label>
                <select
                  id='occasion'
                  name='occasion'
                  value={FormData.occasion}
                  key={FormData.occasion}
                  onChange={handleChange}
                  required
                >
                  {occasionArr.map((occasion, occasionIndex) => (
                    <option value={occasion} key={occasionIndex}>
                      {occasion}
                    </option>
                  ))}
                </select>
              </div>

              <button aria-label='On Click' type='submit'>
                Make The Reservation
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  )
}
export default BookingForm
