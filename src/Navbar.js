import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><img src="Workout Lab Logo.png" alt="Workout Lab Logo" className="navbar-logo"/></Link>
            <div className="navbar-options">
                <Link to="/exercises" className="navbar-options__elements">EXERCISES</Link>
                <Link to="/workout-creator" className="navbar-options__elements">WORKOUT CREATOR</Link>
                <Link to="/sign-in" className="navbar-options__elements">SIGN IN</Link>
            </div>
        </div>
    )
}

export default Navbar
