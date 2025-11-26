import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=> {
    localStorage.setItem("count", count)
  }, [count])

  return (
    <>
      <h1>Working with useEffect</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>        
      </div>    
    </>
  )
}

export default App
