import React, {Component} from 'react';
import './App.css';
import fire from './loginconfig/fire';
import LoginRegister from './components/LoginRegister';
import Homepage from './components/HomePage';
import { Container } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state={
      user: null
    }
  }

  componentDidMount(){
    this.authListner();
  }

  authListner(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user:null});
      }
    })
  }

  render(){
    return(
      <div> 
        {this.state.user ? (<Homepage/>) : (<LoginRegister/>)}
      </div>
    );
  }

}
export default App;
