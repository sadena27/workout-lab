import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutForm from './Workout-Form';
import '../Form.css';

function EditWorkout(props) {
    const [workout, setWorkout] = useState({name: '', date: new Date(), exercises: []})

    const onChangeWorkoutName = e => {
        setWorkout(prevState => ({...prevState, name: e.target.value}))
    };

    const onChangeDate = date => {
        setWorkout(prevState => ({...prevState, date: date}))
    };

    const onSubmitWorkout = e => {
        e.preventDefault();

        const newWorkout = {
            name: workout.name,
            description: workout.description,
            exercises: workout.exercises
        }

        console.log(newWorkout);

        axios.post('http://localhost:5000/workouts/update/' + props.match.params.id, workout)
            .then(res => console.log(res.data));

        window.location = '/workout-tracker'
    }
    
    useEffect(() => {
        axios.get('http://localhost:5000/workouts/' + props.match.params.id)
            .then(response => {
                setWorkout({
                    name: response.data.name,
                    date: new Date(response.data.date),
                    exercises: response.data.exercises
                })
            })
            .catch((error) => {
                console.log(error);
            })

    }, [props.match.params.id]);

    return (
        <div className="edit-box">
            <WorkoutForm
                type="Edit"
                workout={workout}
                onChangeName={onChangeWorkoutName}
                onSubmit={onSubmitWorkout}
                onChangeDate={onChangeDate}
            />
        </div>
    )
}

export default EditWorkout;
