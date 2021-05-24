import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><img src="Workout Lab Logo.png" alt="Workout Lab Logo" width="30%"/></Link>
            <Link to="/exercises" className="navbar__options">EXERCISES</Link>
            <Link to="/workout-creator" className="navbar__options">WORKOUT CREATOR</Link>
            <Link to="/sign-in" className="navbar__options">SIGN IN</Link>
        </div>
    )
}

export default Navbar
