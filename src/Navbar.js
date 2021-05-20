import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            
            <Link to="/" className="navbar__title"><img src="Workout Lab Logo.png" alt="Workout Lab Logo" width="30%"/></Link>
            <div className="navbar__options">
                <Link to="/workout-creator" className="navbar__options">Workout Creator</Link>
                <Link to="/workouts" className="navbar__options">Workouts</Link>
            </div>
        </div>
    )
}

export default Navbar
