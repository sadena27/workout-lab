import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    return (
        <div className="homepage">
            <div className="intro">
                <div className="intro__info">
                    <h1>WELCOME TO THE WORKOUT LAB.</h1>
                    <p>The center for achieving your workout goals.</p>
                    <a href="#learnMore" className="intro__button">Learn More</a>
                    <Link to="/sign-in" className="intro__button">Sign In</Link>
                </div>
                <img src="homepage_background.jpg" alt="man deadlifting"></img>
            </div>
            <div className="exploreBox">
                <div className="exploreBox__card">
                    <div className="exploreBox__card__exercise">
                        <Link to="/exercises" className="exploreCardText">EXPLORE EXERCISES</Link>
                    </div>
                </div>
                <div className="exploreBox__card">
                    <div className="exploreBox__card__workout">
                        <Link to="/workout-creator" className="exploreCardText">BUILD CUSTOM WORKOUTS</Link>
                    </div>
                </div>
            </div>
            <div id="learnMore">
                <h1> LEARN MORE</h1>
                <p>This is where you can learn more about workout lab.</p>
            </div>
        </div>
    )
}

export default Homepage
