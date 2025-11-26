import React, { useState } from 'react'

export default function Dashboard() {

    const [isLoggedIn, setIsLoggedIn ] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    const showMessage = () => {
        if(isLoggedIn){
            return <h3>Welcome back!</h3>
        } else {
            return <h3>Please login</h3>
        }
    }

  return (
    <div>
        <button onClick={handleLogin}> { isLoggedIn? "Logout" : "Login"} </button>
        {showMessage()}

        {isLoggedIn && "User detail come here..."}
    </div>
  )
}
