export default () =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/shops`).then(response =>
    response.json()
  )
