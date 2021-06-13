import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

function Workout_Tracker() {
    const [exercise, setExercise] = useState({username: '', exerciseName: '', sets: 0, reps: 0, users: [], date: new Date()});

    const onChangeUsername = (e) => {
        setExercise(prevState => {
            return {...prevState, username: e.target.value}
        })
    };

    const onChangeExerciseName = (e) => {
        setExercise(prevState => {
            return {...prevState, exerciseName: e.target.value}
        })
    };

    const onChangeSets = (e) => {
        setExercise(prevState => {
            return {...prevState, sets: e.target.value}
        })
    };

    const onChangeReps = (e) => {
        setExercise(prevState => {
            return {...prevState, reps: e.target.value}
        })
    };

    const onChangeDate = (date) => {
        setExercise(prevState => {
            return {...prevState, date: date}
        })
    };

    const onSubmit = (e) => {
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

        // window.location = '/'
    }
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                if (response.data.length > 0) {
                    setUsers(response.data.map(user => user.username));
                    setExercise(prevState => {
                        return {...prevState, username: response.data[0].username}
                    });
                }
            })
        setUsers(['test user', 'another user']);
    }, []);

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
            <div className="form-group"> 
                <label>Username: </label>
                <select
                    required
                    className="form-control"
                    value={exercise.username}
                    onChange={onChangeUsername}>
                    {/* ref={inputRef} */}
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
            <div className="form-group"> 
                <label>Exercise Name: </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    value={exercise.exerciseName}
                    onChange={onChangeExerciseName}
                    />
            </div>
            <div className="form-group">
                <label>Sets: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={exercise.sets}
                    onChange={onChangeSets}
                    />
            </div>
            <div className="form-group">
                <label>Reps: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={exercise.reps}
                    onChange={onChangeReps}
                    />
            </div>
            <div className="form-group">
                <label>Date: </label>
                <div>
                    <DatePicker
                    selected={exercise.date}
                    onChange={onChangeDate}
                    />
                </div>
            </div>
            <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
            </div>
            </form>
        </div>
    )
}

export default Workout_Tracker;
