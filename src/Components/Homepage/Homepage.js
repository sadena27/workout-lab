import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    const [loggedIn, setLoggedIn] = useState(false)

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
        <div className="homepage">
            <div className="intro">
                <div className="intro__info">
                    <h1>WELCOME TO THE WORKOUT LAB.</h1>
                    <a href="#learnMore" className="intro__button">Learn More</a>
                    {loggedIn
                    ? <Link to="/login" className="intro__button">Account</Link>
                    : <Link to="/login" className="intro__button">Login</Link>
                    }
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
                        <Link to="/workout-tracker" className="exploreCardText">TRACK YOUR WORKOUTS</Link>
                    </div>
                </div>
            </div>
            <div id="learnMore">
                <div className="showcase">
                    <h2>Sample workout log:</h2>
                    <img src="workout_log.png" alt="workout log example"></img>
                    <h2>Sample exercise log:</h2>
                    <img src="exercise_log.png" alt="exercise log example"></img>
                    <h2>Explore exercise database with 260+ exercises:</h2>
                    <img src="explore_exercises.png" alt="exercise log example"></img>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
