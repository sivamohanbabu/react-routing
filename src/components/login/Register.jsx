import React, { useState } from 'react';
import{ Redirect} from "react-router-dom";

const Register =()=>{

    const [isAuth ,setIsAuth] = useState(true);

if(!isAuth){

    return <Redirect to ="/login"/>

}


    

        return (
            <div className="base-container">
                <div className="header">Register form</div>
                <div className="container">
                    
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Enter Name</label>
                    <input type="text" name="username" placeholder="username" />
                      </div>
                <div className="form-group">
                    <label htmlFor="email">Enter Email</label>
                    <input type="text" name="email" placeholder=" enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">create password</label>
                    <input type="text" name="password" placeholder="create password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">confirm password</label>
                    <input type="text" name="password" placeholder="confirm password" />
                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={()=>setIsAuth(false)}>
                        Register
                    </button>
                </div>
                isAuth :{isAuth.toString()}
          </div>
        </div>
        </div>
        )
    }


export default Register;
