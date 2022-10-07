import React, {useState, useEffect} from 'react';
import NavBar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import { getCurrentUser } from './actions/auth';

import Home from './Home';
import Login from './Login';
import Singup from './Singup';

function App() {
  const [currentUser, setCurrentUser]= useState(null);
  const [loggedIn, setLoggedIn]= useState(false);
  const [loading, setLoading]= useState(true);

  const handleCurrentUser = (user) => {
    if(user.username) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
    }
  }

  const logoutCurrentUser = () => {
    setCurrentUser(null);
    setLoggedIn(false);
    setLoading(false);
  }

// useEffect(() => {
//   getCurrentUser(handleCurrentUser)
// }, [])


  return (
  <Router>
    <div className="App">
    <NavBar loggedIn={ loggedIn } logoutCurrentUser={ logoutCurrentUser } />
   


    <Route exact path="/" component={ Home } />
        <Route exact path="/singup" render={ props => <Singup {...props} handleCurrentUser={ handleCurrentUser } /> } />
        <Route exact path="/login" render={ props => <Login {...props} handleCurrentUser={ handleCurrentUser } /> } />
     <h1>HELLO WORLD</h1>
       
    
    </div>
    </Router>
  );
}



export default App;
