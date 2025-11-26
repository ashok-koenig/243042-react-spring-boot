import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FriendsList from './components/FriendsList'
import CourseList from './components/CourseList'

function App() {
  

  return (
    <>
      <h1>Working with List in React</h1>
      <FriendsList />
      <CourseList />
    </>
  )
}

export default App
