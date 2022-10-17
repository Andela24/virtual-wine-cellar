import React, { Component } from 'react'
import AddWineryForm from '../components/wineryComponents/AddWineryForm';
import { connect } from 'react-redux';
import { getWineries, getFavorites } from '../Actions/actions'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


class WineriesContainer extends Component {

  
state = {
  sorted: false,
  }


  async componentDidMount() {
    await Promise.all([
      this.props.getWineries(),
    ]);}


  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      sorted: !this.state.sorted
    })
  }

  sortWineries = () => {
    let arr = [...this.props.wineries]
    
    arr.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
       if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
      })
      return arr;
  }




  render() 
  {

    let displayWineries = this.props.wineries
    let buttonText = "Sort Wineries By Alphabetical"
    if (this.state.sorted === true) {
       displayWineries = this.sortWineries()
       buttonText = "Unsort Wineries"
    }
    return (
      <div className="Wineries"> 
      <h1>Wineries</h1>
      <div className="winery-form-section"> 
        <p>If you do not see your favorite wineries below, feel free to add them with the form.</p>
        <AddWineryForm addWinery={this.addWinery} />
        
      </div>
      <Button variant="info" className="sort" onClick={this.handleClick} >{buttonText}</Button>
        <Row>
          {displayWineries.map(a => {
                return(
            <Col xs={12} md={6} lg={3} key={a.id} >
                <Card className="wine" >
                    <Card.Body>
                        <Card.Title>Winery: {a.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Location: {a.location}</ListGroupItem>
                    </ListGroup>
            </Card>
          </Col>
               )       
              }
              )}
        </Row>
      </div>
    )
  }
}

export default connect(
  state => ({
    wineries: state.wineries.all,
  }),
  {
    getWineries,
  }
)(WineriesContainer);