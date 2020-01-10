import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class extends Component {
    render() {
        return (
            <div>

                <div>
                this is feed component
                <div className="mt"> <Link to="/account/postquestion" className="btn bg-blue-ui white read">ADD NEW QUESTION</Link> <br/><br/></div>  
                </div>

            </div>
        )
    }
}
