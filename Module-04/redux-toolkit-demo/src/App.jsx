import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './components/Counter'
import CounterActions from './components/CounterActions'

function App() {
 

  return (<Provider store={store}>
    <h1>Reduc Toolkit Demo</h1>
    <Counter />
    <CounterActions />
  </Provider>
  )
}

export default App
