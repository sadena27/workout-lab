import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './Workout-Log.css';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.exerciseName}</td>
        <td>{props.exercise.sets}</td>
        <td>{props.exercise.reps}</td>
        {props.exercise.date
            ? <td>{(new Date(props.exercise.date.substring(0,19)).toDateString()).substring(4)}</td>
            : <td>No date</td>
        }
        <td></td>
        <td>
            <Link to={"/edit/" + props.exercise._id} className="edit-link"><EditIcon/></Link> 
            <button onClick={() => {props.deleteExercise(props.exercise._id)}} className="delete-link"><DeleteIcon/></button>
        </td>
    </tr>
)

function WorkoutLog() {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                setExercises(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [exercises]);
 
    const deleteExercise = id => {
        axios.delete('http://localhost:5000/exercises/' + id)
          .then(response => { console.log(response.data)});
        setExercises(exercises.filter(exercise => exercise._id !== id))
    }

    return (
        <div className="log">
            <h3>Logged Exercises</h3>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map(currExercise => {
                        return <Exercise exercise={currExercise} deleteExercise={deleteExercise} key={currExercise._id}/>;
                    })}
                </tbody>
            </table>
      </div>
    )
}

export default WorkoutLog;

