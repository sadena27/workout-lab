import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import '../Log.css';

const Workout = props => (
    <tr>
        {props.workout.date
            ? <td className="date">
                <Link
                    to={"/workout/" + props.workout._id}
                    className="link">{(new Date(props.workout.date.substring(0,19)).toDateString()).substring(4)}
                </Link>
            </td>
            : <td>No date</td>
        }
        <td>{props.workout.name}</td>
        <td className="actions">
            <Link to={"/workout/edit/" + props.workout._id} className="actions-btn"><EditIcon/></Link> 
            <button onClick={() => {props.deleteWorkout(props.workout._id)}} className="actions-btn"><DeleteIcon/></button>
        </td>
    </tr>
)

class WorkoutLog extends Component {
    constructor(props) {
        super(props);

        this.state = {workouts: []};
        this.deleteWorkout = this.deleteWorkout.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/workouts/')
            .then(response => {
                this.setState({workouts: response.data.sort((workout1, workout2) => new Date(workout2.date) - new Date(workout1.date))})
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
 
    deleteWorkout(id) {
        axios.delete('http://localhost:5000/workouts/' + id)
          .then(response => { console.log(response.data)});
        this.setState({workouts: this.state.workouts.filter(workout => workout._id !== id)})
    }

    render() {
        return (
            <div className="log">
                <div className="log__workout">
                    <div className="log__header">
                        <h3>Workout Log</h3>
                        <Link to="/workout-tracker/add-workout" className="add-btn">Add a new workout</Link> 
                    </div>
                    {this.state.workouts.length !== 0
                        ? <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.workouts.map(currWorkout => {
                                    return <Workout workout={currWorkout} deleteWorkout={this.deleteWorkout} key={currWorkout._id}/>;
                                })}
                            </tbody>
                        </table>
                        : <p>You have not logged any workouts yet. Click add a new workout to begin adding to your workout log.</p>
                    }
                </div>
            </div>
        )
    }
}

export default WorkoutLog;