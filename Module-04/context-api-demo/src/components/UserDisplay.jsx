import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function UserDisplay() {
    const {name} = useContext(UserContext)
  return (
    <div>Your name: {name}</div>
  )
}
