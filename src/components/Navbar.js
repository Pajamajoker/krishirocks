import React, { Component } from 'react'
import './resources/css/navbar.css'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <Link to="/account/home">Home</Link>
                    <Link to="/account/feed">QnA Forum</Link>
                    <Link to="/account/myfarm">My Farm</Link>
                    <Link to="/">My Finance</Link>
                    <Link to="/account/schemes">Govt Schemes</Link>
                </div>
            </div>
        )
    }
}
