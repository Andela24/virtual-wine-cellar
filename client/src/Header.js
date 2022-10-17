import React from 'react';
import Navbar from './Navbar';

 const Header = ({ currentUser, setCurrentUser, logoutCurrentUser  }) => {


  return (
    <div className="header-background">
      <h1 className="header">Calmer</h1>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} logoutCurrentUser ={logoutCurrentUser }/>
    </div>
  )
}

export default Header;