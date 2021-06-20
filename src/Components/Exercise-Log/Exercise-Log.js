import React, {useState, useEffect} from 'react';
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

function ExerciseLog() {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                if (response.data !== exercises) {
                    setExercises(response.data)
                } else {
                    console.log('false')
                }
            })
            .catch((error) => {
                console.log(error)
            })
            console.log('effect running')
    }, []);
 
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
                        <th>Description</th>
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

export default ExerciseLog;
