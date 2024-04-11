import { render, screen, waitFor } from '@testing-library/react'
import BookingForm from './BookingForm'
import BookingPage from './BookingPage'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

test('should render some static text', () => {
  render(
    <BrowserRouter initialEntries={['/']}>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </BrowserRouter>
  )
  const headingElement = screen.getByText('Make A Reservation')
  waitFor(() => expect(headingElement).toBeInTheDocument())
})
