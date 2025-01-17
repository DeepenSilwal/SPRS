import React, {Component} from 'react';
import fire from '../loginconfig/fire';

class LoginRegister extends Component {
  constructor(props){
      super(props);
      this.state={
          email: '',
          password:'',
          fireErrors:'',
          formTitle:'Login',
          loginBtn: true
      };
  }

  handleChange= e=>{
      this.setState({[e.target.name]: e.target.value})
  }

  login = e =>{
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error)=>{
          this.setState({fireErrors : error.message})
      })

  }

  register = e =>{
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error)=>{
        this.setState({fireErrors : error.message})
    })

}

  getAction = action =>{
      if(action == 'reg'){
          this.setState({formTitle:'Register New user', loginBtn:false, fireErrors:''});
      }
      else{
        this.setState({formTitle:'Login', loginBtn:true, fireErrors:''});
      }
  }

  render(){
      let errorNotification = this.state.fireErrors ?
        (<div className="Error">{this.state.fireErrors}</div>) : null;

      let submitBtn = this.state.loginBtn ?
        (<input className="loginBtn" type="submit" onClick={this.login} value="Enter" />) :
        (<input className="loginBtn" type="submit" onClick={this.register} value="Register" />)

    let login_register= this.state.loginBtn ?
        (<button className="registerBtn" onClick={()=>this.getAction("reg")}> Register </button>) :
        (<button className="registerBtn" onClick={()=>this.getAction("login")}> Login </button>)

    return(
      <div className = "form">
          <div id ="title">{this.state.formTitle}</div>  
          <div class="body">
              {errorNotification}
              <form>
                  <input type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"/>

                   <input type="password"
                   value={this.state.password}
                   onChange={this.handleChange}
                   name="password"/>
                  
                  {submitBtn}
              </form>
                {login_register}
          </div>    
      </div>
    );
  }

}
export default LoginRegister;
