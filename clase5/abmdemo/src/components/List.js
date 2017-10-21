import React from 'react'

function List ({ items }) {
  return (
    <ul>
      {items.map(item => <li key={item.url}>{item.name}</li>)}
    </ul>
  )
}

export default List
