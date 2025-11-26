import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContext'
import axios from 'axios'

export default function Profile() {
    const {token, logout} = useContext(AuthContext)
    const [user, setUser] = useState(null)

    const loadProfile = async ()=> {
        const res = await axios.get("https://dummyjson.com/auth/me")
        setUser(res.data)
    }

    if(!token) return <p>Please login first</p>

  return (
    <div>
        <h3>Profile details</h3>
        <button onClick={loadProfile}>Load profile</button>
        <button onClick={logout}>Logout</button>

        {
            user && (
                <pre>{JSON.stringify(user)}</pre>
            )
        }
    </div>
  )
}
