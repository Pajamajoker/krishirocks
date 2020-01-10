import React ,{Component} from 'react';
import SignupForm from './SignupForm.js'
import SignIn from './SignIn.js'
import {Switch,Route} from 'react-router-dom'
import Account from './Account'
import government from './government'
import Vendor from './Vendor'
import govtschemes from './govtschemes.js';
import govtmain from './govtmain.js';



class Login extends Component {

    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"component={SignIn}></Route>
                    <Route  path="/signup" component={SignupForm}></Route>
                    <Route  path="/account" component={Account}></Route>
                    <Route  path="/government" component={government}></Route>
                    <Route  path="/Vendor" component={Vendor}></Route>
                    <Route  path="/govtschemes" component={govtschemes}></Route>
                    <Route  path="/govtmain" component={govtmain}></Route>



                </Switch>

            </div>
        )
    }
}
export default Login;
