import React from "react";
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Virtual Wine Cellar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/logout">Sign Up</Nav.Link>
          
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;