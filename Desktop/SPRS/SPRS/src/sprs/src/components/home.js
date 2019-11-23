import React,{Component} from 'react';
import { Jumbotron, Container,Badge } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {Button, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Register from './register';
import cors from 'cors';
import parking from './newparking.gif';

class Home extends Component{

constructor(props){
    super(props);
    this.state={
        datas:[],
        isLoading: true,
        weekday: this.getday(),
        registerclicked: false, 
        start_time:'',
        end_time:''
    }; 
}

getday(){
    var curr = new Date;
    var today = curr.getDay;
    var day=''
    if(today == 0){
        day = 'sunday';
    }
    if(today = 1){
        day ='monday';
    }
    if(today == 2){
        day ='tuesday';
    }
    if(today == 3){
        day ='wednesday';
    }
    if(today == 4){
        day ='thursday';
    }
    if(today == 5){
        day ='friday';
    }
    if(today == 6){
        day ='saturday';
    }
    return day;
}

gettime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if(time-1 < this.state.data.start_time && time > this.state.data.end_time){

    }
}

async componentDidMount(weekday){
    const response = await fetch(`/api/users/${this.state.weekday}`)
    const body = await response.json()
    this.setState({datas:body, isLoading: false})

}


render(){
    const {datas, isLoading,fname} = this.state;
    if(isLoading)
        return (<div>Loading...</div>)

    let clicktochange = ()=>{
        this.setState({
            registerclicked: true
        });
    }
        
    let row =
        datas.map(
            datas =>(
                <tr>
                    <td>{datas.start_time}</td>
                    <td>{datas.end_time}</td>
                    <td>$10</td>
                    <td> <Button varient = "info" onClick={clicktochange}>Register</Button> </td>
                </tr>
            )
            
        ) 
          
    return (      
        <div>      
            {this.state.registerclicked ?       
                <div>
                    <Register value={this.state.datas}/>                   
                </div>
            :
        
        <div className="Home" > 
            <h1 id = "test" align="center" class="text-white">
                S.P.R.S 
             </h1> 
             <h4 align="center" >Registration Made Easy </h4>     
            <Jumbotron id ="jumbo2">
            <Row id ="row">
                        <Col id ="col1">
                                <img src={parking} id="parking"/> 
                        </Col>
                        <Col>           
                                <Table responsive id ="table">               
                                    <thead>             
                                        <th >Start Time</th>               
                                        <th >End Time</th>
                                        <th >Amount</th>
                                    </thead>
                                    <tbody>
                                        {row}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
            </Jumbotron>
            <Jumbotron id="jumbo3">
                <h4 align="center">Long Term Parking Starts From December 2019</h4>
            </Jumbotron>

           
        </div>
        
            }       
        </div>
        
        
    );
    }
}

export default Home;