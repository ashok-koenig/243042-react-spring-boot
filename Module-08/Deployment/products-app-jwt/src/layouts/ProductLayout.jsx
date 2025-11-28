import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { AuthContext } from '../context/AuthContext'

export default function ProductLayout() {
  const {token} = useContext(AuthContext)

  if(!token) return <Navigate to="/login" />
  return (
    <div className='container'>
      <NavBar />
        <Outlet />
    </div>
  )
}
