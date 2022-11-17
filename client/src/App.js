import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import { getCurrentUser } from './Actions/auth';
import ListWineries from './containers/ListWineries';
import AddBottle from './AddBottle';
import AddWinery from './containers/AddWinery';
// import BottleDetail from './containers/BottleDetail';
import UserPage from './containers/UserPage';
import EditBottle from './containers/EditBottle';


import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import BottleList from './containers/BottleList';

function App() {
  const [currentUser, setCurrentUser]= useState({});
  const [loggedIn, setLoggedIn]= useState(false);
  const [loading, setLoading]= useState(true);
  const [wineries, setWineries] = useState([]);
  const [bottles, setBottles] =useState([]);

  const handleCurrentUser = (user) => {
    if(user.username) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
   
    }
  }

  const logoutCurrentUser = () => {
    setCurrentUser({});
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

const onAddWinery = (winery) => {
  setWineries([...wineries, winery])
}

const onAddBottle = (bottle) => {
  setBottles([...bottles, bottle])
}

const updateBottle = (updatedBottle) => setBottles(current => {
  return current.map(bottle => {
    if(bottle.id === updatedBottle.id){
      return updatedBottle
    } else {
      return bottle
    }
  })
}) 

const removeBottle= id => {
  setBottles(bottles.filter(bottle=> bottle.id !== id))
  }
  return (
    
    <div className="App">
    <BrowserRouter> 
    <Navbar loggedIn={ loggedIn } logoutCurrentUser={ logoutCurrentUser } />
    <Switch>
        <Route exact path="/" render={ props => <Home {...props} loggedIn={loggedIn} currentUser={currentUser}/>} />
        <Route exact path="/signup" render={ props => <Signup {...props} handleCurrentUser={ handleCurrentUser } /> } />
        <Route exact path="/login" render={ props => <Login {...props} handleCurrentUser={ handleCurrentUser } /> } />
        <Route exact path="/bottles" render={ props => <BottleList {...props} bottles={bottles} wineries={wineries} removeBottle={removeBottle} /> }  />
        {/* <Route exact path="/bottles/:id" render={ props => <BottleDetail {...props} bottles={bottles} /> }  /> */}
        <Route exact path="/bottles/new" render={ props => <AddBottle {...props} onAddBottle={onAddBottle}  /> }  />
        <Route exact path="/wineries/new" render={ props => <AddWinery {...props} onAddWinery={onAddWinery} /> }  />
        <Route exact path="/wineries" render={ props => <ListWineries {...props} wineries={wineries} currentUser={currentUser} /> }  />
        <Route exact path="/userPage" render= { props =><UserPage {...props} bottles={bottles} /> } />
        <Route exact path="/bottles/:id/edit" render={ props => <EditBottle {...props} updateBottle={updateBottle}/>} />
        {/* <Route exact path='/wineries/:id/bottles' render={ props => <BottleDetail {...props} /> } /> */}

     </Switch>
    </BrowserRouter>
    </div>
  );
}



export default App;
