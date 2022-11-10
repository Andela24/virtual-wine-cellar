import React from "react";
import { NavLink } from 'react-router-dom'
import { logout } from './Actions/auth'
import { useHistory } from 'react-router-dom'


const Navbar = ({ loggedIn, currentUser, logoutCurrentUser }) => {
  const history=useHistory()
  if( loggedIn ) {
    return (
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/logout" onClick={ (e) => logout(e, logoutCurrentUser) }>Logout</NavLink></li>
        <li><NavLink to="/wineries" onClick={() =>history.push('/wineries') }>All Wineries</NavLink></li>
        <li><NavLink to="/bottles" onClick={() =>history.push('/bottles') }>My Cellr</NavLink></li>
      
       
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