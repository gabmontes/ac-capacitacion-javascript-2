import React, { Component } from 'react';

import swapi from './swapi'
import Home from './components/Home';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searching: 'people',
      people: [],
      selectedPerson: null,
      person: null
    }
  }

  componentWillMount() {
    const component = this

    swapi.getPeople().then(function (people) {
      component.setState({
        searching: 'none',
        people: people.results
      })
    })
  }

  render() {
    return <Home {...this.state} />
  }
}

export default App;
