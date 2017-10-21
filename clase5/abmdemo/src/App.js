import React, { Component } from 'react';

import swapi from './swapi'
import Home from './components/Home';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searching: true,
      people: []
    }
  }

  componentWillMount() {
    const component = this

    swapi.getPeople().then(function (people) {
      component.setState({
        searching: false,
        people: people.results
      })
    })
  }

  render() {
    return <Home {...this.state} />
  }
}

export default App;
