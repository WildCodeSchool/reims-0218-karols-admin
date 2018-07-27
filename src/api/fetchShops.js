export default () =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/shops`, {
    credentials: "include"
  }).then(response => response.json())
