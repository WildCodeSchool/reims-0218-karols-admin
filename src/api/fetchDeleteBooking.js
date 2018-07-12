export const fetchDeleteBooking = id => {
  return fetch("/bookings/" + id, {
    method: "delete"
  }).then(response => response.json())
}
