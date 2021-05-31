import React, { useState, useEffect } from 'react';
import Model from 'react-body-highlighter';
import './Exercises.css';
import axios from 'axios';

const exercises = [
    {
        info: {name: 'Biceps Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'Hammer Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'Incline Dumbell Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'Barbell Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'Seated Biceps Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    },
    {
        info: {name: 'EZ-Bar Curl', muscles: ['biceps', 'biceps', 'forearm']},
        link: "https://www.w3schools.com/"
    }
];

function Exercises() {
    const [data, setData] = useState([]);
    const [exercises, setExercises] = useState([{name: '', id: ''}]);

    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://wger.de/api/v2/exerciseimage/?is_main=True/?language=2');
            setData(response.data.results);
        }
        async function getExercises() {
            const response = await axios.get('https://wger.de/api/v2/exercise/?limit=20&offset=360');
            setExercises(response.data.results);
        }
        getData();
        getExercises();
     }, [])


    let exerciseName

    return (
        <div className="exercises">
            {data.map((exercise) => (
                <div className="exercises__box">
                    {exercises.length == 0 ? (<a href={exercise.image} target="_blank">{"test"}</a>) :
                    (<a href={exercise.image} target="_blank">{"test2"}</a>)}
                    <p/>
                    <img src={exercise.image} alt="exercise image"/>
                    {/* <div className="exercises__box__bodies">
                        <Model
                            data={exercise.info}
                            style={{ width: '70px'}}
                            type="anterior"
                            highlightedColors={['#87bfff','#3f8efc']}
                        />
                        <Model
                            data={exercise.info}
                            style={{ width: '70px'}}
                            type="posterior"
                            highlightedColors={['#87bfff','#3f8efc']}
                        />
                    </div> */}
                </div>
            ))}
        </div>
    )
}

export default Exercises
