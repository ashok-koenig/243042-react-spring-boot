import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function NavBar() {
  const {logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout=()=>{
    logout()
    navigate("/login")
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/products">Products App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link" aria-current="page" to="/products">Products List</NavLink>
        <NavLink className="nav-link" to="/products/add">Add Product</NavLink>       
      </div>
    </div>
    <button type="button" onClick={handleLogout} className='btn btn-secondary'>Logout</button>
  </div>
</nav>
  )
}
