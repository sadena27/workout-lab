import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    return (
        <div className="homepage">
            <div className="intro">
                <div className="intro__info">
                    <h1>WELCOME TO THE WORKOUT LAB.</h1>
                    <a href="#exploreBox" className="intro__button">Learn More</a>
                    <Link to="/sign-in" className="intro__button">Sign In</Link>
                </div>
                <img src="homepage_background.jpg" alt="man deadlifting"></img>
            </div>
            <div id="exploreBox">
                <div className="exploreBox__card">
                    <div className="exploreBox__card__exercise">
                        <Link to="/exercises" className="exploreCardText">EXPLORE EXERCISES</Link>
                    </div>
                </div>
                <div className="exploreBox__card">
                    <div className="exploreBox__card__workout">
                        <Link to="/workout-tracker" className="exploreCardText">TRACK YOUR WORKOUTS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
