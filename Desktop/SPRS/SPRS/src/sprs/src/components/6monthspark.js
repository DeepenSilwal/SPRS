import React,{Component} from 'react';
import {Button, Row, Col, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


class Sixmonthspark extends Component{
    render(){
        return (
            <div>
                <h1 align="center">REGISTRATION STARTS ON DECEMBER 2019</h1>
                <Form>
                        <Form.Row>                  
                            <Form.Group as={Col} controlId="FirstName">
                            <Form.Label>FirstName </Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" onChange={this.nameChange} name="fname"/>
                            </Form.Group> 
                            <Form.Group as={Col} controlId="Middle Name">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control type="MiddleName" placeholder="Enter Middle Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="LastName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="LastName" placeholder="Enter Last Name" onChange={this.nameChange} name="lname"/>
                            </Form.Group>     
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="VechileNumber">
                            <Form.Label>Vechile Number</Form.Label>
                            <Form.Control type="VechileNumber" placeholder="Enter Vechile Number" onChange={this.nameChange} name="vechile_no" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="CreditCard">
                            <Form.Label>Credit Card</Form.Label>
                            <Form.Control type="CreditCard" placeholder="Enter Credit Card Number" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="CVV">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control placeholder="CVV" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="Expiration date">
                            <Form.Label>Expiration Date</Form.Label>
                            <Form.Control placeholder="10/21" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Registration Starts on December 2019</Tooltip>}>
                            <span className="d-inline-block">
                                <Button disabled style={{ pointerEvents: 'none' }}>
                                 Submit
                                </Button>
                            </span>
                        </OverlayTrigger>
                        </Form>
            </div>

        );
    }
}

export default Sixmonthspark;