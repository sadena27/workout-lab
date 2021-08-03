import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function SignUp() {
    const [user, setUser] = useState({firstName: '', lastName: '', email: '', password: ''});

    const onChangeFirstName = e => {
        setUser(prevState => ({...prevState, firstName: e.target.value}))
    };

    const onChangeLastName = e => {
        setUser(prevState => ({...prevState, lastName: e.target.value}))
    };

    const onChangeEmail = e => {
        setUser(prevState => ({...prevState, email: e.target.value}))
    };

    const onChangePassword = e => {
        setUser(prevState => ({...prevState, password: e.target.value}))
    }; 

    const onSubmit = e => {
        e.preventDefault();

        console.log(user);

        axios.post('http://localhost:5000/signup', user, { withCredentials: true })
            .then(res => console.log(res.data));
        
        // window.location = '/login';
    }

    return (
        <div className="sign">
            <div className="login-form">
                <form onSubmit={onSubmit}>
                    <div className="input"> 
                        <label>First name</label>
                        <input
                            type="text"
                            required
                            className="input__box"
                            placeholder="First Name"
                            onChange={onChangeFirstName}
                        />
                    </div>
                    <div className="input">
                        <label>Last name</label>
                        <input
                            type="text"
                            required
                            className="input__box"
                            placeholder="Last Name"
                            onChange={onChangeLastName}
                        />
                    </div>
                    <div className="input">
                        <label>Email</label>
                        <input
                            type="text"
                            required
                            className="input__box"
                            placeholder="Email"
                            onChange={onChangeEmail}
                        />
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input
                            type="text"
                            required
                            className="input__box"
                            placeholder="Password"
                            onChange={onChangePassword}
                        />
                    </div>
                    <input type="submit" value="Sign Up" className="submit-btn"></input>
                </form> 
            </div>
        </div>
    )
}

export default SignUp;
