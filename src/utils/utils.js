import { fetchAPI, submitAPI } from '../API/api'
import { useNavigate } from 'react-router-dom'

export const initializeTimes = () => {
  let availableTimes = fetchAPI(new Date())
  return availableTimes
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      let availableTimes = fetchAPI(new Date())
      return availableTimes
    default:
      return state
  }
}
