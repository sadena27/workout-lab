import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseForm from './Exercise-Form';
import '../Form.css';

function EditExercise(props) {
    const [exercise, setExercise] = useState({name: '', description: ''});

    const onChangeExerciseName = e => {
        setExercise(prevState => ({...prevState, name: e.target.value}))
    };

    const onChangeDescription = e => {
        setExercise(prevState => ({...prevState, description: e.target.value}))
    };

    const onSubmitExercise = e => {
        e.preventDefault();

        const newExercise = {
            name: exercise.name,
            description: exercise.description,
        }

        console.log(newExercise);

        axios.post('http://localhost:5000/workouts/editExercise/' + props.match.params.workoutID + "/" + props.match.params.exerciseID, newExercise)
            .then(res => console.log(res.data))
            .catch((error) => {
                console.log(error);
            })

        window.location = '/workout/' + props.match.params.workoutID
    }

    useEffect(() => {
        axios.get('http://localhost:5000/workouts/' + props.match.params.workoutID + "/" + props.match.params.exerciseID)
            .then(response => {
                setExercise({
                    name: response.data.name,
                    description: response.data.description, 
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }, [props.match.params.workoutID, props.match.params.exerciseID]);

    return (
        <div className="edit-box">
            <ExerciseForm
                type="Edit"
                exercise={exercise}
                onChangeName={onChangeExerciseName}
                onSubmit={onSubmitExercise}
                onChangeDescription={onChangeDescription}
            />
        </div>
    )
}

export default EditExercise;
