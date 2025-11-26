import React, { useState } from 'react'

export default function NameInput() {

    const [name, setName] = useState("")

    const handleInputChange = (event) =>{
        setName(event.target.value)
    }

  return (
    <div>
        <h3>Name: {name}</h3>
        <input type='text' onChange={handleInputChange} value={name} />
    </div>
  )
}
