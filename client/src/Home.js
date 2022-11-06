import React from 'react'
import { useHistory } from 'react-router-dom'


const Home = () => {
const history=useHistory()
    return (
      <div className="Home">
        <h1 style={{ textAlign: 'center' }}> Welcome to Wine Cellar </h1>
        
        <p>Cellr allows you to organize your wine collection in a number of different ways, such by year, grape variety, cost, and more.</p>
        <button onClick={(e) => history.push("/")}> Click </button>
      <img src="https://images.pexels.com/photos/6309844/pexels-photo-6309844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Welcome to Wine Cellar"></img>
    
      </div>
    );
  }
  
  export default Home