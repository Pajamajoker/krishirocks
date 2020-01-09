import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


// {
//     "date": "2020-01-07",
//     "questionid": "15",
//     "question": "hi",
//     "upvotes": "0",
//     "time": "17:38:12.95363330",
//     "title": "hello",
//     "downvotes": "0",
//     "tags": "[hi, hi, helo, what, is, up, hi, hello, hi, hello, hi, hello, hi, hello, hi, hello]"
// }


export default class extends Component {

    constructor(props) {
        super(props)
    
        this.state = ( {
             posts : []
        })
    }
    
     componentDidMount () {
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(Response =>{
             console.log(Response)
             this.setState ({posts:Response.data})
         })
         .catch(error =>{
             console.log(error)
         })
     }




    render() {
        
        const {posts} = this.state

        return (
            <div>

                <div>
                this is feed component
                

                Lists of post
                <div>
                    {
                        posts.length ?
                        posts.map( posts => 
                             <div key = {posts.id}>
                                 <center> 
                                    
                                    <div>
                                    <div>{posts.title}              {posts.userId}</div>
                                    </div>




                                  </center>
                             </div> )  :
                        null    
                    }
                    </div>
                </div>
            
            
            
            </div>
        )
    }
}
