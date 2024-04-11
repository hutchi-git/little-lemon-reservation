import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

import App from './App'

test('renders learn react link', () => {
  render(
    <BrowserRouter initialEntries={['/']}>
      <App />
    </BrowserRouter>
  )
  const linkElement = screen.getAllByText('Chicago')
  waitFor(() => expect(linkElement).toBeInTheDocument())
})

/* 
test('should redirect and update dom', () => {
  render(
    <Routes>c
      <Route path='/' element={<Home />} />
      <Route path='/Reservation' element={<BookingPage />} />
      <Route path='/Confirmation' element={<Confirmation />} />
    </Routes>
  )

  userEvent.click(screen.getByText(su))

  expect(screen.getByText(/Confirm/i)).toBeInTheDocument()
})

test('submitAPI returns true', () => {
  const formData = {
    date: '2022-10-12',
    time: '20:00',
    guests: 5,
    occasion: 'Birthday'
  }
  const result = submitAPI(formData)
  expect(result).toBe(true)
})
 */
