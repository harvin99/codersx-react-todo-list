import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


class LoginForm extends Component {
    render(){
        return(
            <div className="LoginForm m-auto w-25">
                <form>
                <label for="username">Username*</label>
                <input type="text" className="form-control" id="username"></input>
                <label for="pwd">Password*</label>
                <input type="password" className="form-control" id="pwd"></input>
                
                </form>
                <button type="button" className="btn btn-success mt-3 w-100">Sign in</button>
                <div className="d-flex justify-content-center mt-3">
                    <div><input className="form-check-input" type="checkbox"/></div>
                    <p>Keep me signed in</p>
                </div>
                <div className="d-flex justify-content-center mt-3"> 
                    <a href="#">Forgot username?</a>
                    <a className="ml-3" href="#">Forgot password?</a>
                </div>
            </div>
        )
    }
}
export default LoginForm 