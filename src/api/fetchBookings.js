export default city =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/bookings/${city}`).then(response =>
    response.json()
  )
