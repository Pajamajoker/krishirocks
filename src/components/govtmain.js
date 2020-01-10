import React, {Component} from 'react'
import Chart from './Chart'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Navbar'
import govtschemes from './govtschemes';
import government from './government';
import broadcast from './broadcast';


class govtmain extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{}
        }
    }
    render(){
        return(

            <React.Fragment>
               
               <Navbar
                 text1="Home" Link1={`${this.props.match.path}/government`}
                 text2="Schemes" Link2={`${this.props.match.path}/govtschemes`}
                 text3="Broadcast" Link3={`${this.props.match.path}/broadcast`}
                 text4="Minimum Support Price" Link4={`${this.props.match.path}/msp`}/> 
                  <Switch>
                    
                    <Route  exact path={`${this.props.match.path}/government`} component={government}></Route>
                    <Route path={`${this.props.match.path}/broadcast`} component={broadcast}></Route>
                    <Route  exact path={`${this.props.match.path}/govtschemes`} component={govtschemes}></Route>
                    <Route path={`${this.props.match.path}/msp`} component={broadcast}></Route>

                </Switch>  

                       
            </React.Fragment>
        );
    }
}
export default govtmain