import React,{Component} from 'react';
import axios from 'axios';
import {Button, Row, Col} from 'react-bootstrap';

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
        console.log(e.target.value)
        this.setState({
            vechile_no: e.target.value
        })
    }


    render(){
        return (
            <div>
                <ul>
                    {this.state.datas.map(data=>
                        <li>{data}</li>)}
                </ul>
                {this.state.vechile_no}
                <form>
                <label>
                    Enter your vechile number
                    <input type="text" name="vechile_no" placeholder="ABC1234" onChange={this.addvechile_no}/>
                </label>
                <Button variant="primary" type="submit" onClick={this.getvechile_no}>Submit</Button>
            </form>
            </div>

        );
    }
    /*
    state={
        vechile_no:'',
    }

    handleSubmit = event  =>{
        event.preventDefaule();

        const user={
            vechile_no:this.state.vechile_no,
        }

        axios
        .get(`http://localhost:8080/api/users/`,{user})
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
    }

    handlechange= event =>{
        this.setState({name: event.target.value});
    }

    render(){
        return(
            <form>
                <label>
                    <input type="text" name="name" onChange={this.handlechange}/>
                </label>
                <button type="submit">Add</button>
            </form>
        )
    }*/
}

export default Myparking;