import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Reusable components and Composition patterns</h1>
      <Card title="Counter Card">
        <p>Current count: {count}</p>
        <Button label="Increase" onClick={()=> setCount(count + 1)} />

        <Button label="Reset" type='secondary' onClick={()=> setCount(0)} />
      </Card>
    </>
  )
}

export default App
