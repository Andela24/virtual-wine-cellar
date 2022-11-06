import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import { getCurrentUser } from './Actions/auth';
import ListWineries from './containers/ListWineries';


import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import BottleList from './containers/BottleList';
// import About from './About';



function App() {
  const [currentUser, setCurrentUser]= useState({});
  const [loggedIn, setLoggedIn]= useState(false);
  const [loading, setLoading]= useState(true);
  const [wineries, setWineries] = useState([])
  const [bottles, setBottles] =useState([])

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

useEffect(() => {
  fetch("/bottles")
  .then(resp => resp.json())
  .then(bottles => setBottles(bottles))
}, [])

  return (
    
    <div className="App">
    <BrowserRouter> 
    <Navbar loggedIn={ loggedIn } logoutCurrentUser={ logoutCurrentUser } />
    <Switch>
        <Route exact path="/" render={ props => <Home {...props} loggedIn={loggedIn}/>} />
        <Route exact path="/signup" render={ props => <Signup {...props} handleCurrentUser={ handleCurrentUser } /> } />
        <Route exact path="/login" render={ props => <Login {...props} handleCurrentUser={ handleCurrentUser } /> } />
        
        <Route exact path="/wineries" render={ props => <ListWineries {...props} wineries={wineries}/> }  />
        <Route exact path="/bottles" render={ props => <BottleList {...props} bottles={bottles}/> }  />
      
     </Switch>
    </BrowserRouter>
    </div>
  );
}



export default App;
