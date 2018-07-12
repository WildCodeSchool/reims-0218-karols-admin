export default () =>
  fetch(`http://api.karolsresa.fr/shops`).then(response => response.json())
