import React from 'react';
import {Button,Navbar,Form,FormControl,Nav} from 'react-bootstrap';
import fire from '../loginconfig/fire';
import  './Nav.css'
import logo from './logo.gif'
import park from './newpic1.gif'


var logout = ()=>{
    fire.auth().signOut();
}


function Navigation(){
    return(
        <div>
            <Navbar bg="dark" variant="dark" img src={logo}>
            <Navbar.Brand >
                <img src={park} style={{width:100, marginTop: -30, marginBottom:-30}} />
            </Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/myparking">MyParking</Nav.Link>
            <Nav.Link href="/sixmonthspark">6MonthsPark</Nav.Link>
            <div className="logout">
                <Nav.Link onClick={logout}>LogOut</Nav.Link>
            </div>
            </Nav>
            </Navbar>
        </div>
    )
}
export default Navigation;