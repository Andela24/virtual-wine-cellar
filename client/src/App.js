import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import { getCurrentUser } from './actions/auth';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';

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

useEffect(() => {
  getCurrentUser(handleCurrentUser)
}, [])


  return (
    
    <div className="App">
    <BrowserRouter> 
    <Navbar loggedIn={ loggedIn } logoutCurrentUser={ logoutCurrentUser } />
    <Switch>
     <Route exact path="/" component={ Home } />

     <Route exact path="/" component={ Home } />
        <Route exact path="/signup" render={ props => <Signup {...props} handleCurrentUser={ handleCurrentUser } /> } />
        <Route exact path="/login" render={ props => <Login {...props} handleCurrentUser={ handleCurrentUser } /> } />
     </Switch>
    </BrowserRouter>
    </div>
  );
}



export default App;
