import { render, screen, waitFor } from '@testing-library/react'
import BookingPage from './BookingPage'
import { fetchAPI, submitAPI } from '../API/api'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

test('should return the corect expected value for initializedTimes and UpdatTimes', () => {
  render(
    <BrowserRouter initialEntries={['/']}>
      <BookingPage />
    </BrowserRouter>
  )

  const today = new Date()
  const expectedResult = { times: fetchAPI(today) }
  waitFor(() => expect(initializeTimes()).toEqual(expectedResult))
})
test('initializeTimes returns the correct expected value', () => {
  const today = new Date()
  const initialState = initializeTimes()
  const expectedResult = { times: fetchAPI(today) }
  expect(initialState).toEqual(expectedResult)
})

test('updateTimes returns the same state', () => {
  const state = {
    times: [
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
      '22:30',
      '23:00',
      '23:30'
    ]
  }
  const action = { type: 'UPDATE_TIMES' }
  const newState = updateTimes(state, action)
  expect(newState).toEqual(state)
})
