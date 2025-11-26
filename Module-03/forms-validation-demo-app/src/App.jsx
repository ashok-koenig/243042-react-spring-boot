import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontrolledFrom from './components/UncontrolledFrom'

function App() { 

  return (
    <>
      <h1>Working with Forms and Validations</h1>
      <ControlledForm />
      <UncontrolledFrom />
    </>
  )
}

export default App
