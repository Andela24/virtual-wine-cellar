import React, { Component } from 'react'
import CellarCards from '../components/cellarComponents/CellarList'
import { connect } from "react-redux";
import { getWineries, getFavorites } from "../Actions/actions";
import Row from 'react-bootstrap/Row'


class CellarContainer extends Component {

   componentDidMount() {
     
      this.props.getWineries()
      this.props.getFavorites()
}

  render() {
    return (
      <div className="MyCellar">
        <h3>{this.props.user}'s Cellar</h3>
        <div className="WineList">
        <Row>
          <CellarCards className="cellar-cards"
            favorites={this.props.favorites} wineries={this.props.wineries} 
           />
        </Row>
        </div>
      </div>
    )
  }
}


export default connect(
  state => ({
    wineries: state.wineries.all,
    favorites: state.favorites.all
  }),
  {
    getWineries,
    getFavorites
  }
)(CellarContainer);