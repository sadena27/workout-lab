import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';
import WorkoutLog from './Workout-Log';
import './Workout-Tracker.css';

function WorkoutTracker() {
    const [exercise, setExercise] = useState({username: '', exerciseName: '', sets: 0, reps: 0, users: [], date: new Date()});

    const onChangeUsername = e => {
        setExercise({...exercise, username: e.target.value})
    };

    const onChangeExerciseName = e => {
        setExercise({...exercise, exerciseName: e.target.value})
    };

    const onChangeSets = e => {
        setExercise({...exercise, sets: e.target.value})
    };

    const onChangeReps = e => {
        setExercise({...exercise, reps: e.target.value})
    };

    const onChangeDate = date => {
        setExercise({...exercise, date: date})
    };

    const onSubmit = e => {
        e.preventDefault();

        const newExercise = {
            username: exercise.username,
            exerciseName: exercise.exerciseName,
            sets: exercise.sets,
            reps: exercise.reps,
            date: exercise.date,
        }

        console.log(newExercise);

        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));

        setExercise({username: '', exerciseName: '', sets: 0, reps: 0, users: [], date: new Date()})

        // window.location = '/'
    }
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                if (response.data.length > 0) {
                    setUsers(response.data.map(user => user.username));
                    setExercise({...exercise, username: response.data[0].username})
                }
            })
    }, []);

    return (
        <div>
            <WorkoutLog/>
            <div className="form">
                <h3>Add New Exercise</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-input"> 
                        <label>Username: </label>
                        <select
                            required
                            className="form-input__box"
                            value={exercise.username}
                            onChange={onChangeUsername}>
                            {
                            users.map((user) => {
                                return <option 
                                    key={user}
                                    value={user}>{user}
                                </option>;
                            })
                            }
                        </select>
                    </div>
                    <div className="form-input"> 
                        <label>Exercise Name: </label>
                        <input
                            type="text"
                            required
                            className="form-input__box"
                            value={exercise.exerciseName}
                            onChange={onChangeExerciseName}
                            />
                    </div>
                    <div className="form-input">
                        <label>Sets: </label>
                        <input 
                            type="text" 
                            className="form-input__box"
                            value={exercise.sets}
                            onChange={onChangeSets}
                            />
                    </div>
                    <div className="form-input">
                        <label>Reps: </label>
                        <input 
                            type="text" 
                            className="form-input__box"
                            value={exercise.reps}
                            onChange={onChangeReps}
                            />
                    </div>
                    <div className="form-input">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={exercise.date}
                            onChange={onChangeDate}
                            />
                        </div>
                    </div>
                    <input type="submit" value="Add Exercise" className="add-btn"/>
                </form>
            </div>
        </div>
    )
}

export default WorkoutTracker;
