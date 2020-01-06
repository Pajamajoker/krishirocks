import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from'./Home'
import {Switch,Route} from 'react-router-dom'
import MyFarm from './MyFarm'
import AddFarm from './AddFarm'

export default class Account extends Component {
    constructor(props) {
        super(props)
            this.state = {
                aadharid:this.props.location.state.aadharid
            }
    }
    render(props) {

        console.log(this.state.aadharid)
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path={`${this.props.match.path}`} component={Home}></Route>
                    <Route exact path={`${this.props.match.path}/home`} component={Home}></Route>
                    <Route path={`${this.props.match.path}/myfarm`} component={MyFarm} ></Route>
                    <Route path={`${this.props.match.path}/addfarm`}
                    render={(props) => (<AddFarm {...props} aadharid={this.state.aadharid} />)}
                    ></Route> 
                </Switch>
            </div>
        )
    }
}
