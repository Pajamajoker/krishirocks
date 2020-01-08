import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class FarmTile extends Component {
    render() {
        return (
            <div>

                      <div className="col-md-12" >
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                             <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">Farm Number</span> 
                             </div>
                             <figure> <img alt="" src="https://ak9.picdn.net/shutterstock/videos/7553389/thumb/1.jpg"></img> 
                             </figure>
                             <div className="item-box-blog-body">
                                <div className="item-box-blog-heading">
                                    
                                        <h5>Farm Name</h5>
                                    
                                </div>
                                        <div className="item-box-blog-data">
                                        <p><i className="fa fa-user-o"></i> Details, <i className="fa fa-location-o"></i> Location</p>
                                        </div>
                                        <div className="item-box-blog-text">
                                        <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                                        </div>
                                        <div className="mt"> <Link to="/account/FarmDetails" className="btn bg-blue-ui white read">Show Farm Details</Link> </div>
                                    </div>
                            </div>
                      </div>
                    </div>

        
        </div>
        )
    }
}
