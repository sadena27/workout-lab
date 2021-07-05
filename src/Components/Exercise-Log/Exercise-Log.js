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
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({exercises: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
            console.log('effect running')
    }
 
    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(response => {
                console.log(response.data)
            });
        this.setState({exercises: this.state.exercises.filter(exercise => exercise._id !== id)})
    }

    render() {
        return (
            <div className="log">
                <h3>Logged Exercises</h3>
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
