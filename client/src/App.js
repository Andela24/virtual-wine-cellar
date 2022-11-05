import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import { getCurrentUser } from './Actions/auth';
import ListWineries from './containers/ListWineries';





import Home from './Home';
import Login from './Login';
import Signup from './Signup';
// import About from './About';



function App() {
  const [currentUser, setCurrentUser]= useState(null);
  const [loggedIn, setLoggedIn]= useState(false);
  const [loading, setLoading]= useState(true);
  const [wineries, setWineries] = useState([])

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


useEffect(() => {
  fetch("/wineries")
  .then(resp => resp.json())
  .then(wineries => setWineries(wineries))
}, [])


  return (
    
    <div className="App">
    <BrowserRouter> 
    <Navbar loggedIn={ loggedIn } logoutCurrentUser={ logoutCurrentUser } />
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/signup" render={ props => <Signup {...props} handleCurrentUser={ handleCurrentUser } /> } />
        <Route exact path="/login" render={ props => <Login {...props} handleCurrentUser={ handleCurrentUser } /> } />
        <Route exact path="/wineries" component={<ListWineries wineries={wineries}/> }  />
        
      
     </Switch>
    </BrowserRouter>
    </div>
  );
}



export default App;
