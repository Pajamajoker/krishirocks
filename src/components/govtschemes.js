import React, {Component} from 'react'
import axios from 'axios'

class govtschemes extends Component{
    constructor(props){
        super(props);
        this.state={
        }
      
    
    }


    render(){
        return( 
            
    <div><div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                    <form className="login100-form validate-form" onSubmit={this.submitHandler}>
                        <span className="login100-form-title p-b-33">
                            Farmer SignIn
                        </span>


                       <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="text" name="aadharid" /*value={aadharid}*/ onChange={this.changeHandler} placeholder="AdhaarID"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                       <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" /*value={password}*/ onChange={this.changeHandler} placeholder="Password"></input>
                            <span className="focus-input100-1"></span>
                            <span className="focus-input100-2"></span>
                        </div>

                        <div className="container-login100-form-btn m-t-20">
                            <button className="login100-form-btn">
                                Sign In
                            </button>
                        </div>



                        <div className="text-center">
                        </div>
                    </form>
                </div>
            </div>
        </div></div>
        );
}
}
export default govtschemes