export default city =>
  fetch(`http://localhost:8000/bookings/${city}`).then(response =>
    response.json()
  );
