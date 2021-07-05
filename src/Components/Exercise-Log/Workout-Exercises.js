import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseLog from './Exercise-Log';
import ExerciseForm from './Exercise-Form';
import '../Form.css';

function WorkoutExercises(props) {
    const [exercise, setExercise] = useState({username: '', name: '', description: '', users: []});
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

    const onSubmitExercise = e => {
        e.preventDefault();

        const newExercise = {
            username: exercise.username,
            name: exercise.name,
            description: exercise.description,
        }

        axios.post('http://localhost:5000/workouts/updateExercise/' + props.match.params.id, newExercise)
            .then(res => console.log(res.data))
            .catch((error) => {
                console.log(error);
            })

        setExercise({...exercise, name: '', description: '', users: []})

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
    }, [props.match.params.id]);

    return (
        <div>
            <ExerciseLog {...props}/>
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

export default WorkoutExercises;
