
const baseUrl = process.env.REACT_APP_API_BASE
const get = () => {
  return fetch(baseUrl + 'games', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    }
  })
  .then(res => res.json())
}

export default {
  get
}
