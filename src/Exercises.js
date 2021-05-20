import React from 'react';
import Model from 'react-body-highlighter';
import './Exercises.css';


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
    }
]

function Exercises() {
    return (
        <div className="exercises">
            {exercises.map((exercise) => (
                <div className="exercises__box">
                    <a href={exercise.link} target="_blank">{exercise.info.name}</a>
                    <p/>
                    <div className="exercises__box__bodies">
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
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Exercises
