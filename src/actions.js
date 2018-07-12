export const BOOKINGS_RECEIVED = "BOOKINGS_RECEIVED"
export const DELETE_BOOKING = "DELETE_BOOKING"

export const makeBookingsReceived = bookings => ({
  type: BOOKINGS_RECEIVED,
  bookings
})

export const makeDeletedBookingId = id => ({
  type: DELETE_BOOKING,
  id
})
