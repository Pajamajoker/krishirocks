import React, { Component } from 'react'
import FeedComponent from './FeedComponent'
import {Link} from 'react-router-dom'
export default class Feed extends Component {
    render() {
        return (
            <div>
                <div className="mt"> <Link to="/account/postquestion" className="btn bg-blue-ui white read">ADD NEW QUESTION</Link> <br/><br/></div>  
                 <FeedComponent/>
               
            </div>
        )
    }
}
