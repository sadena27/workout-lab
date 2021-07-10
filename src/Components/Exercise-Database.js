import React, { useState, useEffect } from 'react';
import Model from 'react-body-highlighter';
import Loader from "react-loader-spinner";
import './Exercise-Database.css';
import axios from 'axios';

const muscleNames = ["lower-back", "biceps", "front-deltoids", "obliques", "chest", "triceps", 
                "abs", "calves", "gluteal", "trapezius", "quadriceps",
                "biceps", "upper-back", "biceps", "obliques", "calves"]

function ExerciseDatabase() {
    const [exercises, setExercises] = useState([{name: '', id: '', muscles: []}]);

    useEffect(() => {
        async function getExercises() {
            const response = await axios.get('https://wger.de/api/v2/exercise/?limit=300&language=2&muscles=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
            const temp_exercises = response.data.results.filter((exercise, index, self) =>
                index === self.findIndex(e => (e.name === exercise.name)))
            
            temp_exercises.forEach(exercise => {
                if (exercise.muscles.includes(12)) {
                    exercise.muscles.push(0);
                }
                exercise.muscles = exercise.muscles.concat(exercise.muscles)
                if (Array.isArray(exercise.muscles_secondary) && exercise.muscles_secondary.length !== 0) {
                    if (exercise.muscles_secondary.includes(12)) {
                        exercise.muscles_secondary.push(0);
                    }
                    exercise.muscles = exercise.muscles.concat(exercise.muscles_secondary)
                }
            });
            
            setExercises(temp_exercises);
        }
        getExercises();
     }, [])

    return (
        <div className="exercises">
            {exercises.length === 1 
             ?  <div className="loading">
                    <p>Loading exercises</p>
                    <Loader type="Oval" color="#3f8efc" height={120} width={120}/>
                </div>
             :  exercises.map(exercise => (
                    <div className="exercises__box">
                        {/* {exercises.length == 0 ? (<a href={exercise.image} target="_blank">{"test"}</a>) :
                        (<a href={exercise.image} target="_blank">{exercises.find(
                            exercise => exercise.id == 289
                        ).name}</a>)} */}
                        <a href={`http://www.google.com/search?q=${exercise.name}`} target="_blank" rel="noreferrer">{exercise.id} {exercise.name}</a>
                        <p/>
                        {/* <img src={exercise.image} alt="exercise image"/> */}
                        <div className="exercises__box__bodies">
                            <Model
                                data={[
                                    { name: 'Primary muscles', muscles: exercise.muscles.map(muscle => muscleNames[muscle])}
                                ]}
                                style={{ width: '60px'}}
                                type="anterior"
                                highlightedColors={['#87bfff','#3f8efc']}
                            />
                            <Model
                                data={[
                                    { name: 'Primary muscles', muscles: exercise.muscles.map(muscle => muscleNames[muscle])}
                                ]}
                                style={{ width: '60px'}}
                                type="posterior"
                                highlightedColors={['#87bfff','#3f8efc']}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ExerciseDatabase;
