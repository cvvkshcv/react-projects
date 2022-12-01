import React from 'react'

function Select({ options }) {
  return (
    <div>
      <select>
        <option>Select your country</option>
        {
          options.map(option => {
            return <option>{option}</option>
          })
        }
      </select>
    </div>
  )
}

export default Select;