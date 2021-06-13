import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

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

        console.log(newExercise)

        // window.location = '/'
    }
    
    const [users, setUsers] = useState([]);
    // const [username, setUsername] = useState('');

    useEffect(() => {
        setUsers(['test user', 'another user']);
        // setUsername('testee user')
        // setExercise(prevState => {
        //     return {...prevState, user: 'testeeeee user'}
        // })
    }, []);

    // const inputRef = useRef(null);

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
