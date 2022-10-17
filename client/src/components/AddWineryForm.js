import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWinery } from '../../Actions/actions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddWineryForm extends Component {

    state = {
        winery: {name: "", location: ""}
    }
    
    handleChange = event => {
        this.setState( {
            winery: {...this.state.winery, [event.target.name]: event.target.value}
        })
    }
        
    createWinery = (e) => {
        //1.  Stop page from refreshing
        e.preventDefault();
        this.props.addWinery(this.state.winery);
        //clear form fields
        this.setState( {
            winery: {name: "", location: ""}
        })
    }
    
        render() {
            return (
                <Form className="winery-edit" onSubmit={this.createWinery}>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Winery Name:</Form.Label>
                        <Form.Control required name="name" type="text" value={this.state.winery.name} placeholder="Winery Name" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formGroupLocation">
                        <Form.Label>Winery Location</Form.Label>
                        <Form.Control required name="location" type="text" value={this.state.winery.location} placeholder="Winery Location" onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            )
        }
    }
    
    export default connect(null, { addWinery })(AddWineryForm)