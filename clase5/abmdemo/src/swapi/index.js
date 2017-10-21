const swapi = {
  getPeople: function () {
    return fetch('https://swapi.co/api/people')
      .then(response => response.json())
  }
}

export default swapi
