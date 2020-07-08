import React, { Component } from 'react'
//import '../Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {
    render(){
        return(
            <div className="logo">
                <h1 className='text-center'>Logo</h1>
                <h1 className='text-center'>Sign in</h1>
            </div>
        )
    }
}
export default Header 