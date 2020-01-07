import React, { Component } from 'react'
import './resources/css/farmTiles.css'
import FarmTile from './FarmTile'
import axios from 'axios'
import {Link} from 'react-router-dom'
//import AddFarm from './AddFarm'
class MyFarm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             error:""
        }
    }

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/users',{params:{aadharid:this.props.aadharid}})
        //axios.get('http://192.168.43.233:8080/farmer/show/farm',{params:{aadharid:this.props.aadharid}})
        .then(response => {  console.log(  "hello" ) 
        this.setState({posts:response.data}) 
        }
        ) 
        .catch(
            
            error=>{ 
                this.setState({error:"No Farms Found"})
                console.log(error) }
        )


    }

    render() {
        const{posts}=this.state
        return (

            <div> 

            <div className="mt"> <Link to={{pathname:"/account/addfarm",MyFarmprops:{farmNum:posts.length}}} className="btn bg-blue-ui white read">ADD NEW FARM</Link> <br/><br/></div>  
                
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                
                                {
                                     posts.length ?
                                            posts.map(post=>
                                            <div className="col-md-4" >
                                            <FarmTile/>
                                            </div>) 
                                    :null
                                }



                            </div>
                        </div>
                    </div>

                    { this.state.error ? <div>{this.state.error}</div>:null}    
                    
            </div>
        )
    }
}
export default MyFarm   