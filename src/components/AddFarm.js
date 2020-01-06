import React, { Component } from 'react'
import axios from 'axios'
class AddFarm extends Component {

    constructor(props) {
        super(props)
            console.log("inaddfarrrmm")
            console.log(props)
            this.state = {
                aadharid:this.props.aadharid,
                Name:'',
                State:'',
                District:'',
                Taluka:'',
                Pincode:'',
                Area:'',
                Location:'N/A'
            }
    }


    submitHandler =(e) =>{ 
        e.preventDefault() ;
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => { console.log(response)})
        .catch(error => { console.log(error)})
    }
    changeHandler = (event) =>{   this.setState({[event.target.name]:event.target.value})    }


    render() {
        const {Name,State,District,Taluka,Pincode,Area,Location}=this.state
        console.log("inaddfarm")
        console.log(this.state.aadharid)
        return (
            <div>
                <form  onSubmit={this.submitHandler} >
                <div class="form-group">
                <label class="col-md-4 control-label">Farm Name</label>  
                <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="Name" value={Name} onChange={this.changeHandler} placeholder="Farm Name" class="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div class="form-group">
                <label class="col-md-4 control-label">State</label>  
                <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="State" value={State} onChange={this.changeHandler} placeholder="State" class="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div class="form-group">
                <label class="col-md-4 control-label">District</label>  
                <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="District" value={District} onChange={this.changeHandler} placeholder="District" class="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div class="form-group">
                <label class="col-md-4 control-label">Taluka</label>  
                <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="Taluka" value={Taluka} onChange={this.changeHandler} placeholder="Taluka" class="form-control"  type="text"></input>
                    </div>
                </div>
                </div>

                <div class="form-group">
                <label class="col-md-4 control-label">Pin Code</label>  
                <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="Pincode" value={Pincode} onChange={this.changeHandler} placeholder="Pin Code" class="form-control"  type="text"></input>
                    </div>
                </div>
                </div>


                <div class="form-group">
                <label class="col-md-4 control-label">Area(in acres)</label>  
                <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="Area" value={Area} onChange={this.changeHandler} placeholder="Area(in acres)" class="form-control"  type="text"></input>
                    </div>
                </div>
                </div>


                <div class="form-group">
                <label class="col-md-4 control-label">Location</label>  
                <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="Location" value={Location} onChange={this.changeHandler} placeholder="Location" class="form-control"  type="text"></input>
                    </div>
                </div>
                </div>
                <button type="submit">submit</button>

                </form>
            </div>
        )
    }
}
export default AddFarm