import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import UsersList from './components/UsersList'

function App() {
  

  return (
    <Provider store={store}>
      <h1>Redux Thunk & Middleware to get API data using Axios</h1>
      <UsersList />
    </Provider>
  )
}

export default App
