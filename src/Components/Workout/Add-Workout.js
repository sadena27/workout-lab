import React, { Component } from 'react';
import axios from 'axios';
import WorkoutForm from './Workout-Form';
import '../Form.css';

class AddWorkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workout: {name: '', date: new Date(), exercises: []},
            user: ''
        };

        this.onChangeWorkoutName = this.onChangeWorkoutName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmitWorkout = this.onSubmitWorkout.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/user', { withCredentials: true })
            .then(res => this.setState(prevState => ({
                ...prevState, user: res.data.email
            })))
            .catch((error) => console.log(error))
    }

    onChangeWorkoutName(e) {
        this.setState(prevState => ({...prevState, workout: {...prevState.workout, name: e.target.value}}))
    }

    onChangeDate(date) {
        this.setState(prevState => ({...prevState, workout: {...prevState.workout, date: date}}))
    }

    onSubmitWorkout(e) {
        e.preventDefault();

        axios.get('http://localhost:5000/user', { withCredentials: true })
            .then(res => console.log(res.data.email));

        const newWorkout = {
            user: this.state.user,
            name: this.state.workout.name,
            date: this.state.workout.date,
        }

        console.log(newWorkout);

        axios.post('http://localhost:5000/workouts/add', newWorkout)
            .then(res => console.log(res.data));

        this.setState(prevState => ({...prevState, workout: {name: '', date: new Date(), exercises: []}}))

        window.location = '/workout-tracker'
    }

    render() {
        return (
            <div className="edit-box">
                <WorkoutForm
                    type="Add"
                    workout={this.state.workout}
                    onChangeName={this.onChangeWorkoutName}
                    onSubmit={this.onSubmitWorkout}
                    onChangeDate={this.onChangeDate}
                />
            </div>
        )
    }
}

export default AddWorkout;