import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.exerciseName}</td>
        <td>{props.exercise.sets}</td>
        <td>{props.exercise.reps}</td>
        {props.exercise.date
            ? <td>{props.exercise.date.substring(0,10)}</td>
            : <td>No date</td>
        }
        <td>
            <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="google.com" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
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
 
    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
          .then(response => { console.log(response.data)});
        setExercises(exercises.filter(element => element._id !== id))
    }

    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
            <thead className="thead-light">
                <tr>
                <th>Username</th>
                <th>Exercise Name</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Date</th>
                <th>Actions</th>
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

