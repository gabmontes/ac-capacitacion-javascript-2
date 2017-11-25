import React from 'react'

function PullDown ({ people, selectedPerson, onPersonChanged, disabled }) {
  const allOptions = [{ name: 'Please select one', url: 'none' }].concat(people)
  return (
    <select
      onChange={event => onPersonChanged(event.target.value)}
      disabled={disabled}
      >
      {allOptions.map(item => (
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
