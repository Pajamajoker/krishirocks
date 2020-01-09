import React ,{Component} from 'react';
import SignupForm from './SignupForm.js'
import SignIn from './SignIn.js'
import {Switch,Route} from 'react-router-dom'
import Account from './Account'

class Login extends Component {

    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"component={SignIn}></Route>
                    <Route  path="/signup" component={SignupForm}></Route>
                    <Route  path="/account" component={Account}></Route>

                </Switch>

            </div>
        )
    }
}
export default Login;
