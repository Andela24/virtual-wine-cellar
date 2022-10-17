import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../components/pageComponents/NavBar'
import HomePageContainer from './HomePageContainer'
import WineriesContainer from './WineriesContainer'
import CellarContainer from './CellarContainer'
import NotFound from '../components/pageComponents/NotFound'

class Main extends Component{

    state = {
        name: "Chase Hilbert"
        
    }


render() {
    return (
        <div className="main">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePageContainer} />
                    <Route exact path='/cellar' render={(props) => <CellarContainer {...props} user={this.state.name} />} />
                    <Route exact path="/wineries" component={WineriesContainer} />
                    <Route exact path="/bottles" />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
        )
    }
}

export default Main