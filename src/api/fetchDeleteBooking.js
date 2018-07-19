export const fetchDeleteBooking = id => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/bookings/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
}
