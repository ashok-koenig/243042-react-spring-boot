import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContext'

export default function Login() {
    const [username, setUsername] = useState("emilys")
    const [password, setPassword] = useState("emilyspass")

    const {login} = useContext(AuthContext)
    const handleSubmit = async (e)=> {
        e.preventDefault();
        await login(username, password)
    }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            Username: <input value={username} onChange={(e)=> setUsername(e.target.value)} />
            <br/>
            Password: <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
