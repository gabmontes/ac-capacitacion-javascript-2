import React from 'react'

function PullDown ({ items }) {
  return (
    <select onChange={function (event) { console.log(event.target.value) }}>
      {items.map(item => (
        <option
          key={item.url}
          value={item.url}>
          {item.name}
        </option>
      ))}
    </select>
  )
}

export default PullDown
