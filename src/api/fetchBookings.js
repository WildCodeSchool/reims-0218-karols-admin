export default city =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/bookings/${city}`, {
    credentials: "include"
  }).then(response => response.json())
