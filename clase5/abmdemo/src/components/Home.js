import React from 'react'

import Header from './Header';
import Message from './Message';
import PullDown from './PullDown';
import Person from './Person';

function renderHome({ searching, people, selectedPerson, person, onPersonChanged }) {
  if (searching === 'people') {
    return (
      <div>
        <Message text="Searching for SW people..." />
      </div>
    )
  }
  if (searching === 'none' && !selectedPerson) {
    return (
      <div>
        <PullDown people={people} selected={selectedPerson} onPersonChanged={onPersonChanged} />
      </div>
    )
  }
  if (searching === 'person') {
    return (
      <div>
        <PullDown people={people} selected={selectedPerson} onPersonChanged={onPersonChanged} disabled={true} />
        <Message text="Searching for SW person..." />
      </div>
    )
  }
  if (searching === 'none' && person) {
    return (
      <div>
        <PullDown people={people} selected={selectedPerson} onPersonChanged={onPersonChanged} />
        <Person person={person} />
      </div>
    )
  }
}

function Home (props) {
  return (
    <div>
      <Header/>
      {renderHome(props)}
    </div>
  )
}

export default Home
