import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from './actions/auth'


const Navbar = ({ loggedIn, currentUser, logoutCurrentUser }) => {
  if( loggedIn ) {
    return (
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/logout" onClick={ (e) => logout(e, logoutCurrentUser) }>Logout</NavLink></li>
        
      </ul>
    )
  }

  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/signup">Create Account</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
    </ul>
  )
}

export default Navbar