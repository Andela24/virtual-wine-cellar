import React, { Component } from "react";
import { Jumbotron, Button } from 'react-bootstrap'


class HomePageContainer extends Component {
  render() {
    return (
      <div>
          <h1>Welcome to Cellr.</h1>
        <Jumbotron fluid className="home-hero">
            <p>
              The fastest place to track your wine Cellr.
            </p>
            <p>
              <Button variant="secondary" href="/cellar">View your wines</Button>
            </p>
        </Jumbotron>
      </div>
    );
  }
}

export default HomePageContainer;