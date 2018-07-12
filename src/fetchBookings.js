export default city =>
  fetch(`http://api.karolsresa.fr/bookings/${city}`).then(response =>
    response.json()
  )
