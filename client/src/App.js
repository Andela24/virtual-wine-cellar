import React from 'react';
import NavBar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import Home from './src/Home';

function App() {
  return (
  <Router>
    <div className="App">
      <NavBar />
     <h1>HELLO WORLD</h1>
       
    </div>
    </Router>
  );
}

export default App;
