import React, { useState } from 'react';
import axios from 'axios';
import WorkoutForm from './Workout-Form';
import '../Form.css';

function AddWorkout(props) {
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
            date: workout.date,
        }

        console.log(newWorkout);

        axios.post('http://localhost:5000/workouts/add', workout)
            .then(res => console.log(res.data));

        setWorkout({name: '', date: new Date(), exercises: []})

        window.location = '/workout-tracker'
    }

    return (
        <div className="edit-box">
            <WorkoutForm
                type="Add"
                workout={workout}
                onChangeName={onChangeWorkoutName}
                onSubmit={onSubmitWorkout}
                onChangeDate={onChangeDate}
            />
        </div>
    )
}

export default AddWorkout;