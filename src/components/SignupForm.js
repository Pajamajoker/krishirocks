import React, { Component } from 'react'
import axios from 'axios'
import './resources/vendor/bootstrap/css/bootstrap.min.css'
import './resources/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './resources/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import './resources/vendor/animate/animate.css'
import './resources/vendor/css-hamburgers/hamburgers.min.css'
import './resources/vendor/animsition/css/animsition.min.css'
import './resources/vendor/select2/select2.min.css'
import './resources/vendor/daterangepicker/daterangepicker.css'
import './resources/css/util.css'
import './resources/css/main.css'
import {Link,Redirect} from 'react-router-dom'


export class SignupForm extends Component {
    constructor(props) {
        super(props)
    
            this.state = {
                fullname:'',
                aadharid:'',
                address:'',
                zipcode:'',
                state:'',
                district:'',
                taluka:'',
                reg:0
            }
    }
    
    submitHandler =(e) =>{ 
        e.preventDefault() ;
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => {
             console.log(response)
            if(response.data.id===101)
            {
                this.setState({reg:1})
            }
            })
        .catch(error => { console.log(error)})
    }
    changeHandler = (event) =>{   this.setState({[event.target.name]:event.target.value})    }
    render() {
        const {fullname,aadharid,address,zipcode,state,district,taluka}=this.state
        if(this.state.reg===1)
        {
            return(<Redirect to="/"></Redirect>)
        }
        return (
            <div><div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                    <form className="login100-form validate-form" onSubmit={this.submitHandler}>
                        <span className="login100-form-title p-b-33">
                            Farmer SignUp
                        </span>

                       <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="fullname" value={fullname} onChange={this.changeHandler} placeholder="Username"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                       </div>

                       <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="aadharid" value={aadharid} onChange={this.changeHandler} placeholder="AdhaarID"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="address" value={address} onChange={this.changeHandler} placeholder="Location"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="state" value={state} onChange={this.changeHandler} placeholder="State"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="district" value={district} onChange={this.changeHandler} placeholder="District"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="taluka" value={taluka} onChange={this.changeHandler} placeholder="Taluka"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="zipcode" value={zipcode} onChange={this.changeHandler} placeholder="ZipCode"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                       <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" placeholder="Password"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" placeholder="Confirm Password"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="container-login100-form-btn m-t-20">
                            <button className="login100-form-btn">
                                Sign Up
                            </button>
                        </div>

                        <div className="container-login100-form-btn m-t-20">
                               <Link to='/'>Sign In Instead</Link> 
                        </div>

                        <div className="text-center">
                        </div>
                    </form>
                </div>
            </div>
        </div></div>
            // <div>
            //     <form onSubmit={this.submitHandler}>
            //         <div>
            //         name: <input type="text" name="fullname" value={fullname} onChange={this.changeHandler}/>
            //         </div>
            //         <div>
            //          A-ID   <input type="text" name="aadharid" value={aadharid} onChange={this.changeHandler}/>
            //         </div>
            //         <div>    
            //          add   <input type="text" name="address" value={address} onChange={this.changeHandler}/>
            //         </div>
            //         <button type="submit">submit</button>
            //     </form>

            // </div>
        )
    }
}

export default SignupForm
