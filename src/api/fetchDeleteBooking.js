export const fetchDeleteBooking = id => {
  return fetch(`http://localhost:8000/bookings/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
}
