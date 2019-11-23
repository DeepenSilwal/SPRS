import React,{Component} from 'react';
import fire from '../loginconfig/fire';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Myparking from './myparking';
import Sixmonthspark from './6monthspark';
import Home from './home';
import Navigation from './Nav';
import './navigation.css'


class Homepage extends Component{
    render(){
        return (
            <div >
                <Navigation/>
                <div>
                <Router >
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/myparking" component={Myparking}/>
                        <Route path="/sixmonthspark" component={Sixmonthspark}/>
                    </Switch>
                </Router>
                </div>
            </div>
           

        );
    }
}

export default Homepage;