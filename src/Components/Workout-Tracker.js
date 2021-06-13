import React, { useState } from 'react';

function Workout_Tracker() {
    const [exercise, setExercise] = useState({username: '', exerciseName: '', sets: 0, reps: 0, users: []});

    // onChangeUsername(e) {
    //     setExercise(usernmae: e.target.value)
    // };

    return (
        <div>
            <p>Workout Tracker</p>
        </div>
    )
}

export default Workout_Tracker;
