import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


const CellarCards = ({ wineries, favorites }) => {


    const wineriesDictionary = wineries.reduce((map, winery) => {
        map[winery.id] = winery;
        return map;
      }, {});
    

    return favorites.map(fav => {   
        const matchingWinery = wineriesDictionary[fav.winery_id];
        
    return (
                <Col xs={12} md={6} lg={3} key={fav.id} > 
                    <Card >
                        <Card.Body>
                            <Card.Title>Winery Name: {matchingWinery.name} </Card.Title>
                            <Card.Text>Location: {matchingWinery.location}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

    )})   
}




export default CellarCards