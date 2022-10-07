import React, {useState, useEffect} from 'react';
import NavBar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
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
    
    <div className="App">
    <BrowserRouter> 
    <Switch>
     <Route exact path="/" component={ Home } />
     </Switch>
    </BrowserRouter>
    </div>
  );
}



export default App;
