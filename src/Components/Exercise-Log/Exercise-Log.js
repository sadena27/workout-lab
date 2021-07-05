import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import '../Log.css';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.name}</td>
        <td>{props.exercise.description}</td>
        <td>
            <Link to={"/exercise/edit/" + props.exercise._id} className="link"><EditIcon/></Link> 
            <button onClick={() => {props.deleteExercise(props.exercise._id)}} className="delete-link"><DeleteIcon/></button>
        </td>
    </tr>
)

class ExerciseLog extends Component {
    constructor(props) {
        super(props);

        this.state = {exercises: []};
        this.deleteExercise = this.deleteExercise.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/workouts/' + this.props.match.params.id)
            .then(response => {
                this.setState({exercises: response.data.exercises})
                this.name = response.data.name;
                this.date = (new Date(response.data.date.substring(0,19)).toDateString()).substring(4);
                console.log(response.data.exercises)
            })
            .catch((error) => {
                console.log(error)
            })
    }
 
    // CHANGE THE DELETE EXERCISES (INCORRECT)
    deleteExercise(id) {
        axios.post('http://localhost:5000/workouts/deleteExercise/' + this.props.match.params.id, {id: id})
            .then(response => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
        this.setState({exercises: this.state.exercises.filter(exercise => exercise._id !== id)})
    }

    render() {
        return (
            <div className="log">
                <h3>{this.name} - {this.date}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Exercise</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.exercises.map(currExercise => {
                            return <Exercise exercise={currExercise} deleteExercise={this.deleteExercise} key={currExercise._id}/>;
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExerciseLog;
