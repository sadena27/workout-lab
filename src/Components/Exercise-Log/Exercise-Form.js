import React from 'react';
import '../Form.css';

function ExerciseForm(props) {
    return (
        <div>
            <div className="form">
                <h3>{props.type} Exercise</h3>
                <form onSubmit={props.onSubmit}>
                    <div className="form-input"> 
                        <label>Username: </label>
                        <select
                            required
                            className="form-input__box"
                            value={props.exercise.username}
                            onChange={props.onChangeUsername}>
                            {
                            props.users.map((user) => {
                                return <option 
                                    key={user}
                                    value={user}>{user}
                                </option>;
                            })
                            }
                        </select>
                    </div>
                    <div className="form-input"> 
                        <label>Exercise Name: </label>
                        <input
                            type="text"
                            required
                            className="form-input__box"
                            value={props.exercise.name}
                            onChange={props.onChangeName}
                            />
                    </div>
                    <div className="form-input">
                        <label>Description: </label>
                        <input 
                            type="text" 
                            className="form-input__box"
                            value={props.exercise.description}
                            onChange={props.onChangeDescription}
                            />
                    </div>
                    <input type="submit" value="Submit" className="add-btn"/>
                </form>
            </div>
        </div>
    )
}

export default ExerciseForm;
