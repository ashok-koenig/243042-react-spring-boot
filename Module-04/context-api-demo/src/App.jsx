import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider from './context/UserContext'
import UserInput from './components/UserInput'
import UserDisplay from './components/UserDisplay'

function App() {
  
  return (
    <>

     <h1>Lifting state up and Context API Demo</h1>
     <UserProvider>
      <UserInput />
      <UserDisplay />
     </UserProvider>

    </>
  )
}

export default App
