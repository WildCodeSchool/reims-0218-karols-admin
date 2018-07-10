export const BOOKINGS_RECEIVED = "BOOKINGS_RECEIVED";

export const makeBookingsReceived = bookings => ({
  type: BOOKINGS_RECEIVED,
  bookings
});
