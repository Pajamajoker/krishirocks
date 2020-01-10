import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class SchemeInfo extends Component {
   
    state={
        gotData:"0",
        posts:[]
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/user',{params:{tagname:this.props.match.params.tagname}})
        //axios.get('http://192.168.43.233:8080/farmer/show/farm',{params:{aadharid:this.state.aadharid}})
        .then(response => {  
            console.log(response)
        this.setState({posts:response.data,
                        gotData:"1"}) 
        }
        ) 
        .catch(
            
            error=>{ 
                this.setState({error:"No Scheme Data Found"})
                console.log(error) }
            )
    }
   
    render() {
        const {posts}=this.state
        return (
            <div>
                
                <div className="card my-4">
                        <h5 className="card-header">Categories</h5>
                        <div className="card-body">
                            
                            
                                <ul className="list-unstyled mb-0">
                                    {posts.map(tag=> 
                                    <div className="row-lg-2">
                                    <div className="col-lg-6">
                                       <Link to={{pathname:"/account/scheme-info/"+tag.name}}><li>{tag.name}</li></Link> 
                                    </div>
                                    </div>
                                        )}
                                </ul>
                           
                        </div>
                        </div>


            </div>
        )
    }
}
