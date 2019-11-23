import React,{Component} from 'react';
import axios from 'axios';
import {Button, Row, Col, Jumbotron, Container, Table} from 'react-bootstrap';

class Myparking extends Component{
    constructor(props){
        super(props);
        this.state={
            datas:[],
            vechile_no:''
        }  
        this.addvechile_no =this.addvechile_no.bind(this);
    }

   getvechile_no = (e)=>{
        e.preventDefault()
        fetch(`/api/users/${this.state.vechile_no}`)
        .then(res=>res.json())
        .then(datas=>this.setState({datas},()=>console.log("datas fetched....", this.state.datas.map(Object.values))))
    }

   addvechile_no(e){
    e.preventDefault()
        this.setState({
            vechile_no: e.target.value
        })
    }


    render(){
        return (
            <div className="myparking">
                <Container>
                    <p>helo</p>
                </Container>
                <Jumbotron id="jumbo1">
                <form align="center"> 
                    <label>
                         <h3 align="center">Enter Your Vechile Number</h3>
                        <input type="text" name="vechile_no" placeholder="ABC1234" onChange={this.addvechile_no}/>
                    </label>
                    <Button variant="primary" type="submit" onClick={this.getvechile_no}>Submit</Button>
                </form>
                </Jumbotron>
                <Jumbotron id = "jumbo1">
                    <ul>
                    <Table responsive id ="table"> 
                            <thead>             
                                <th >Name</th>               
                                <th >Start Time</th>
                                <th >End Time</th>
                                <th >Vechile No</th>
                            </thead>
                            <tbody>
                            {this.state.datas.map(data=>                                 
                                 <tr>
                                    <td>{data.fname + " "}{data.lname}</td>
                                    <td>{data.start_time}</td>
                                    <td>{data.end_time}</td> 
                                     <td>{data.vechile_no}</td>                  
                                </tr>
                                )}
                            </tbody>
                        </Table>
                        
                    </ul> 
                </Jumbotron>
            </div>

        );
    }
}

export default Myparking;