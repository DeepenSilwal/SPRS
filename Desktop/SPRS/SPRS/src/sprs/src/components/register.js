import React,{Component} from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {Button, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import cors from 'cors';
import axios from "axios";
import { any } from 'prop-types';

class Register extends Component{


    constructor(props){
        super(props);
        this.state={
            fname:'',
            lname:'',
            vechile_no:'',
            typeofpark:'short',
            start_time:''
        };
        this.nameChange =this.nameChange.bind(this);
        }


    componentDidMount(){
        this.setState({start_time:this.props.value.start_time})
    }

    nameChange(e){
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
        console.log(this.props.value)
        
    }
    
     handlesubmit= () =>{  
        const item = this.state;
         fetch('/api/users/register',{
            method: 'post',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)              
            }     
        )

    }

    render(){
        return (
            <div>
                {this.state.fname}
                {this.state.lname}
                {this.state.start_time}
                <Jumbotron>   
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
                        <Button variant="primary" type="submit" onClick={this.handlesubmit}> Submit</Button>
                        </Form>
                </Jumbotron>     
            </div>

        );
    }
}

export default Register;