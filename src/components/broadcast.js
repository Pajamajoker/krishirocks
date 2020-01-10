import React,{Component} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
class broadcast extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment>
                
                <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Title</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Title"></input>
                    </div>
                    
                </div>
                <div class="form-group">
                    <label for="inputAddress">Message</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                </div>
               
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">District</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">Taluka</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"></input>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
                </form>

        </React.Fragment>

        );
    }
}
export default broadcast
