export default () =>
  fetch(`http://localhost:8000/shops`).then(response => response.json())
