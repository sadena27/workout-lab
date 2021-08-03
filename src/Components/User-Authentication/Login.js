import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

function Login(props) {
    const [user, setUser] = useState({email: '', password: ''})
    const [loggedUser, setLoggedUser] = useState('')

    const onChangeEmail = e => {
        setUser(prevState => ({...prevState, email: e.target.value}))
    };

    const onChangePassword = e => {
        setUser(prevState => ({...prevState, password: e.target.value}))
    }; 

    const onSubmit = async e => {
        e.preventDefault();

        axios.post('http://localhost:5000/login', user, { withCredentials: true })
            .then(res => console.log(res.data));

        console.log(user);
        window.location = '/workout-tracker';
    }

    useEffect(() => {
        axios.get('http://localhost:5000/user/', { withCredentials: true })
            .then(response => {
                if (response.data) {
                    setLoggedUser(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const logout = () => {
        axios.get('http://localhost:5000/logout/', { withCredentials: true })
            .then(res => console.log(res.data));

        window.location = '/login'
    }

    return (
        <div>
            {loggedUser
            ? <div className="account">
                <h1>Welcome to Workout Lab, {loggedUser.firstName}.</h1>
                <table className="account-info">
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <td>{loggedUser.firstName}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Last Name</th>
                            <td>{loggedUser.lastName}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <td>{loggedUser.email}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={logout} className="logout-btn">Logout</button>
            </div>
            : <div className="sign">
                <div className="login-form">
                    <form onSubmit={onSubmit}>
                        <div className="input"> 
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                required
                                className="input__box"
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className="input">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="input__box"
                                onChange={onChangePassword}
                            />
                        </div>
                        <input type="submit" value="Login" className="submit-btn"></input>
                        <div className="sign-up">
                            <p>Don't have an account?</p>
                            <Link to="/sign-up" className="sign-up-btn">Sign Up</Link>
                        </div>
                    </form> 
                </div>
             </div>
            }
        </div>
    )
}

export default Login;
