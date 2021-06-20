import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import '../Log.css';

const Workout = props => (
    <tr>
        <td>{props.exercise.name}</td>
        {props.exercise.date
            ? <td>{(new Date(props.exercise.date.substring(0,19)).toDateString()).substring(4)}</td>
            : <td>No date</td>
        }
        <td></td>
        <td>
            <Link to={"/workout/edit/" + props.exercise._id} className="edit-link"><EditIcon/></Link> 
            <button onClick={() => {props.deleteWorkout(props.exercise._id)}} className="delete-link"><DeleteIcon/></button>
        </td>
    </tr>
)

function WorkoutLog() {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/workouts/')
            .then(response => {
                if (response.data !== workouts) {
                    setWorkouts(response.data)
                } else {
                    console.log('false')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);
 
    const deleteWorkout = id => {
        axios.delete('http://localhost:5000/workouts/' + id)
          .then(response => { console.log(response.data)});
        setWorkouts(workouts.filter(workout => workout._id !== id))
    }

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
                    {workouts.map(currWorkout => {
                        return <Workout exercise={currWorkout} deleteWorkout={deleteWorkout} key={currWorkout._id}/>;
                    })}
                </tbody>
            </table>
      </div>
    )
}

export default WorkoutLog;