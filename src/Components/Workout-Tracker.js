import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseLog from './Exercise-Log/Exercise-Log';
import WorkoutLog from './Workout-Log/Workout-Log';
import WorkoutForm from './Workout-Log/Workout-Form';
import ExerciseForm from './Exercise-Log/Exercise-Form';
import './Form.css';

function WorkoutTracker() {
    const [exercise, setExercise] = useState({username: '', name: '', description: '', users: []});
    const [workout, setWorkout] = useState({name: '', date: new Date(), exercises: []});
    const [users, setUsers] = useState([]);

    const onChangeUsername = e => {
        setExercise(prevState => ({...prevState, username: e.target.value}))
    };

    const onChangeExerciseName = e => {
        setExercise(prevState => ({...prevState, name: e.target.value}))
    };

    const onChangeDescription = e => {
        setExercise(prevState => ({...prevState, description: e.target.value}))
    };

    const onChangeWorkoutName = e => {
        setWorkout(prevState => ({...prevState, name: e.target.value}))
    }

    const onChangeDate = date => {
        setWorkout(prevState => ({...prevState, date: date}))
    };

    const onSubmitExercise = e => {
        e.preventDefault();

        const newExercise = {
            username: exercise.username,
            name: exercise.name,
            description: exercise.description,
        }

        console.log(newExercise);

        axios.post('http://localhost:5000/exercises/add', newExercise)
            .then(res => console.log(res.data));

        setExercise({...exercise, name: '', description: '', users: []})

        // window.location = '/'
    }

    const onSubmitWorkout = e => {
        e.preventDefault();

        const newWorkout = {
            name: workout.name,
            date: workout.date,
        }

        console.log(newWorkout);

        axios.post('http://localhost:5000/workouts/add', workout)
            .then(res => console.log(res.data));

        setWorkout({name: '', date: new Date(), exercises: []})

        // window.location = '/'
    }

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                if (response.data.length > 0) {
                    setUsers(response.data.map(user => user.username));
                    setExercise(prevState => ({...prevState, username: response.data[0].username}))
                }
            })
    }, []);

    return (
        <div>
            <WorkoutLog/>
            <ExerciseLog/>
            <WorkoutForm
                type="Add"
                workout={workout}
                onChangeName={onChangeWorkoutName}
                onSubmit={onSubmitWorkout}
                onChangeDate={onChangeDate}
            />
            <ExerciseForm
                type="Add"
                exercise={exercise}
                onChangeName={onChangeExerciseName}
                onSubmit={onSubmitExercise}
                users={users}
                onChangeUsername={onChangeUsername}
                onChangeDescription={onChangeDescription}
            />
        </div>
    )
}

export default WorkoutTracker;
