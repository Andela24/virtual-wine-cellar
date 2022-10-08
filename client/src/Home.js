import React from 'react'
import NavBar from './Navbar';

const Home = () => {
    return (
      <div className="Home">
          <NavBar/>
        <h1 style={{ textAlign: 'center' }}> Welcome to Wine Cellar </h1>
        <p>Cellr allows you to organize your wine collection in a number of different ways, such by year, grape variety, cost, and more.</p>
      <img src="https://images.pexels.com/photos/6309844/pexels-photo-6309844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Welcome to Wine Cellar"></img>
    
      </div>
    );
  }
  
  export default Home