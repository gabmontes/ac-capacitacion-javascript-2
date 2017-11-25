const swapi = {
  getPeople: function () {
    return fetch('https://swapi.co/api/people')
      .then(response => response.json())
  },
  get: function (url) {
    return fetch(url)
      .then(response => response.json())
  }
}

export default swapi
