import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import '../Log.css';

const Workout = props => (
    <tr>
        <td><Link to={"/workout/show/" + props.exercise._id} className="link">{props.exercise.name}</Link></td>
        {props.exercise.date
            ? <td>{(new Date(props.exercise.date.substring(0,19)).toDateString()).substring(4)}</td>
            : <td>No date</td>
        }
        <td></td>
        <td>
            <Link to={"/workout/edit/" + props.exercise._id} className="action-btn"><EditIcon/></Link> 
            <button onClick={() => {props.deleteWorkout(props.exercise._id)}} className="action-btn"><DeleteIcon/></button>
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
                this.setState({workouts: response.data})
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
                <h3>Logged Workouts</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Workout Name</th>
                            <th>Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.workouts.map(currWorkout => {
                            return <Workout exercise={currWorkout} deleteWorkout={this.deleteWorkout} key={currWorkout._id}/>;
                        })}
                    </tbody>
                </table>
                <Link to="/workout-tracker/add-workout" className="">Add Workout</Link> 
            </div>
        )
    }
}

export default WorkoutLog;