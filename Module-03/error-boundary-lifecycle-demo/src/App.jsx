import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import LifecycleDemo from './components/LifecycleDemo'

function App() {
  

  return (
    <>
     <h1>Working with Error Boundary and Lifecycle methods</h1>
     <ErrorBoundary>
      <LifecycleDemo />
     </ErrorBoundary>
    </>
  )
}

export default App
