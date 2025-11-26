import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function UserInput() {

    const { setName} = useContext(UserContext)


  return (
    <div>
        <input type='text' onChange={(e) => setName(e.target.value)} />
    </div>
  )
}
