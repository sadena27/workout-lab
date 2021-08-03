import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsList, BsX } from 'react-icons/bs';
import './Navbar.css';

function Navbar() {
    const [toggled, toggle] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)
    let toggleIcon;

    if (toggled) {
        toggleIcon = <BsX/>
    } else {
        toggleIcon = <BsList/>
    }

    useEffect(() => {
        axios.get('http://localhost:5000/user/', { withCredentials: true })
            .then(response => {
                if (response.data) {
                    setLoggedIn(true);
                    console.log(response.data)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="navbar">
             <button onClick={() => toggle(!toggled)}>
                {toggleIcon}
            </button>
            <Link to="/">
                <img src="workout-lab-logo.png" alt="Workout Lab Logo" className="navbar-logo"/>
            </Link>
            <div className={toggled ? "navbar-menu" : "navbar-pages"}>
                <Link
                    to="/exercises"
                    onClick={() => toggle(false)}
                    className={toggled ? "navbar-menu__items" : "navbar-pages__items"}>
                        EXERCISES
                </Link>
                <Link
                    to="/workout-tracker"
                    onClick={() => toggle(false)}
                    className={toggled ? "navbar-menu__items" : "navbar-pages__items"}>
                        WORKOUT TRACKER
                </Link>
                {loggedIn
                ? <Link
                    to="/login"
                    onClick={() => toggle(false)}
                    className={toggled ? "navbar-menu__items" : "navbar-pages__items"}>
                    ACCOUNT
                </Link>
                : <Link
                    to="/login"
                    onClick={() => toggle(false)}
                    className={toggled ? "navbar-menu__items" : "navbar-pages__items"}>
                        LOGIN
                </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;
