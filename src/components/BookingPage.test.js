import { render, screen, waitFor } from '@testing-library/react'
import BookingPage from './BookingPage'
import { fetchAPI, submitAPI } from '../API/api'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { initializeTimes, updateTimes } from '../utils/utils'

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
  render(
    <BrowserRouter initialEntries={['/']}>
      <BookingPage />
    </BrowserRouter>
  )

  const today = new Date()
  //const initialState = initializeTimes()
  const expectedResult = { times: fetchAPI(today) }

  waitFor(() => expect(initializeTimes()).toEqual(expectedResult))
})

test('updateTimes returns the same state', () => {
  render(
    <BrowserRouter initialEntries={['/']}>
      <BookingPage />
    </BrowserRouter>
  )

  const state = { times: fetchAPI(new Date()) }
  const action = { type: 'UPDATE_TIMES' }
  const newState = updateTimes(state, action)
  expect(newState).toEqual(state)
})
