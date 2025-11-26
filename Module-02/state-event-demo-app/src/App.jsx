// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import EventsDemo from './components/EventsDemo'
import NameInput from './components/NameInput'

function App() {
  
  return (
    <>
      <h1>Working with State management and Event Handling</h1>
      {/* <EventsDemo /> */}
      <Counter />
      <NameInput />
    </>
  )
}

export default App
