import React from 'react'

import Header from './Header';
import Message from './Message';
import List from './List';

function Home ({ searching, people }) {
  return (
    <div>
      <Header/>
      {searching
        ? <Message text="Searching for SW people..." />
        : <List items={people}/>}
    </div>
  )
}

export default Home
