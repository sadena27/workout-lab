import React, { useState } from 'react';
import './Login.css';

function SignUp() {
    const [user, setUser] = useState({firstName: '', lastName: '', email: '', password: ''});

    const onChangeFirstName = e => {
        setUser(prevState => ({...prevState, firstName: e.target.value}))
    };

    const onChangeLastName = e => {
        setUser(prevState => ({...prevState, lastName: e.target.value}))
    };

    const onChangeEmail = e => {
        setUser(prevState => ({...prevState, email: e.target.value}))
    };

    const onChangePassword = e => {
        setUser(prevState => ({...prevState, password: e.target.value}))
    }; 

    const onSubmit = e => {
        e.preventDefault();

        console.log(user)

        // const newExercise = {
        //     name: exercise.name,
        //     description: exercise.description,
        // }

        // console.log(newExercise);

        // axios.post('http://localhost:5000/workouts/editExercise/' + props.match.params.workoutID + "/" + props.match.params.exerciseID, newExercise)
        //     .then(res => console.log(res.data))
        //     .catch((error) => {
        //         console.log(error);
        //     })

        // window.location = '/workout/' + props.match.params.workoutID
    }

    return (
        <div className="sign">
            <div className="login-form">
                <form onSubmit={onSubmit}>
                    <div className="input"> 
                        <label>First name</label>
                        <input
                            type="text"
                            required
                            className="input__box"
                            placeholder="First Name"
                            onChange={onChangeFirstName}
                        />
                    </div>
                    <div className="input">
                        <label>Last name</label>
                        <input
                            type="text"
                            required
                            className="input__box"
                            placeholder="Last Name"
                            onChange={onChangeLastName}
                        />
                    </div>
                    <div className="input">
                        <label>Email</label>
                        <input
                            type="text"
                            required
                            className="input__box"
                            placeholder="Email"
                            onChange={onChangeEmail}
                        />
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input
                            type="text"
                            required
                            className="input__box"
                            placeholder="Password"
                            onChange={onChangePassword}
                        />
                    </div>
                    <input type="submit" value="Sign Up" className="submit-btn"></input>
                </form> 
            </div>
        </div>
    )
}

export default SignUp;
