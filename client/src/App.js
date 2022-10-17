import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import { getCurrentUser } from './actions/auth';



import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import About from './About';


function App() {
  const [currentUser, setCurrentUser]= useState(null);
  const [loggedIn, setLoggedIn]= useState(false);
  const [loading, setLoading]= useState(true);

  const [wineryData, setWineryData] = useState([])

  useEffect(() => {
    fetch("/wineries")
      .then((r) => r.json())
      .then((wine) => {console.log(wine)});
  }, []);

  // function handleUpdateWine(updatedWineObj) {
  //   const editedWines = wineryData.map((item) => {
  //     if (item.id === updatedWineObj.id) {
  //       return updatedWineObj;
  //     } else {
  //       return item;
  //     }
  //   });
  //   setWineryData(editedWines);
  // }

  const handleCurrentUser = (user) => {
    if(user.username) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
    //  console.log(navigate)
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
        <Route exact path="/signup" render={ props => <Signup {...props} handleCurrentUser={ handleCurrentUser } /> } />
        <Route exact path="/login" render={ props => <Login {...props} handleCurrentUser={ handleCurrentUser } /> } />
        <Route exact path="/about" component={About} />
     </Switch>
    </BrowserRouter>
    </div>
  );
}



export default App;
