import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Loader from "react-loader-spinner";
import '../Log.css';

const Exercise = props => (
    <tr>
        <td>{props.exercise.name}</td>
        <td>{props.exercise.description}</td>
        <td>
            <Link to={"/exercise/edit/" + props.exercise._id} className="action-btn"><EditIcon/></Link> 
            <button onClick={() => {props.deleteExercise(props.exercise._id)}} className="action-btn"><DeleteIcon/></button>
        </td>
    </tr>
)

class ExerciseLog extends Component {
    constructor(props) {
        super(props);

        this.state = {exercises: [], name: '', date: new Date()};
        this.deleteExercise = this.deleteExercise.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/workouts/' + this.props.match.params.id)
            .then(response => {
                this.setState({exercises: response.data.exercises, name: response.data.name, date: (new Date(response.data.date.substring(0,19)).toDateString()).substring(4)})
            })
            .catch((error) => {
                console.log(error)
            })
    }
 
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
        if (this.state.name ) {
            return (
                    <div className="log">
                        <h3>{this.state.name} - {this.state.date}</h3>
                        <table>
                            <thead>
                                <tr>
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
                        <Link to={"/workout/show/" + this.props.match.params.id + "/add-exercise"} className="">Add Exercise</Link>
                    </div>
            )
        } else {
            return (
                <div>
                     <div className="loading">
                        <Loader type="Oval" color="#3f8efc" height={120} width={120}/>
                    </div>
                    <Link to={"/workout/show/" + this.props.match.params.id + "/add-exercise"} className="">Add Exercise</Link>
                </div>
            )
        }
    }
}

export default ExerciseLog;
