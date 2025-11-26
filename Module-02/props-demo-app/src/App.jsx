// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/Person'

function App() {
 

  return (
    <>
      <h1>Working with Props in React</h1>
      <Person firstName="John" lastName="Smith" age={25}/>
      <Person firstName="Ana" lastName="Peter" age={23}/>
    </>
  )
}

export default App
