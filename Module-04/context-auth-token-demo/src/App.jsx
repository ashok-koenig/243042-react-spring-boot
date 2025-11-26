import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthContext } from './auth/AuthContext'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  
const {token} = useContext(AuthContext);
  return (  
    <>
     {token ? <Profile /> : <Login />}
    </>    
    
  )
}

export default App
