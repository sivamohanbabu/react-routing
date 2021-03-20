import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        
    }
 
    
    render() {
        return (
            
            <div className="base-container">
                <div className="header">Login</div>
                <div className="content">
                <div className="image">
                   
                </div>
                    
            <div className="form" >
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" placeholder="username"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" placeholder="password"></input>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Login
                    </button>
                </div>
          </div>
        </div>
        </div>
        )
    }
}

export default Login
