import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="sign">
            <div className="login-form">
                <form onSubmit={onSubmit}>
                    <div className="input"> 
                        <label>Email</label>
                        <input type="text" placeholder="Email" required className="input__box"></input>
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input type="password" placeholder="Password" required className="input__box"></input>
                    </div>
                    <input type="submit" value="Login" className="submit-btn"></input>
                    <div className="sign-up">
                        <p>Don't have an account?</p>
                        <Link to="/sign-up" className="sign-up-btn">Sign Up</Link>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default Login;
