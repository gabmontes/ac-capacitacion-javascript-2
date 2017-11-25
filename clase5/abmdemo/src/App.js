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

    this.onPersonChanged = this.onPersonChanged.bind(this)
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

  onPersonChanged(url) {
    const component = this

    if (url === 'none') {
      component.setState({
        selectedPerson: null,
        searching: 'none'
      })
      return
    }

    component.setState({
      selectedPerson: url,
      searching: 'person'
    })
    swapi.get(url).then(function (person) {
      component.setState({
        searching: 'none',
        person
      })
    })
  }

  render() {
    return <Home {...this.state} onPersonChanged={this.onPersonChanged} />
  }
}

export default App;
