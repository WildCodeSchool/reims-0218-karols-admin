import { BOOKINGS_RECEIVED, DELETE_BOOKING } from "../actions"

const initialState = []

export default (prevState = initialState, action) => {
  if (action.type === BOOKINGS_RECEIVED) {
    return action.bookings
  }
  // creer l'action la test dans redux dev tools a la main
  // et une fois que ça marche
  //gerer l'action delete booking
  // filter booking qui ont un id diff de bookingId
  if (action.type === DELETE_BOOKING) {
    return prevState.filter(booking => booking._id !== action.id)
  }
  return prevState
}
