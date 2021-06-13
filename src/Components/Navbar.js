import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsList, BsX } from 'react-icons/bs';
import './Navbar.css';

function Navbar() {
    const [toggled, toggle] = useState(false);
    let toggleIcon;

    if (toggled) {
        toggleIcon = <BsX/>
    } else {
        toggleIcon = <BsList/>
    }

    return (
        <div className="navbar">
             <button onClick={() => toggle(!toggled)}>
                {toggleIcon}
            </button>
            <Link to="/">
                <img src="Workout Lab Logo.png" alt="Workout Lab Logo" className="navbar-logo"/>
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
                <Link
                    to="/sign-in"
                    onClick={() => toggle(false)}
                    className={toggled ? "navbar-menu__items" : "navbar-pages__items"}>
                        SIGN IN
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
