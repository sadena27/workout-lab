import React from 'react';
import '../Form.css';

function ExerciseForm(props) {
    return (
        <div>
            <div className="form">
                <h3>{props.type} Exercise</h3>
                <form onSubmit={props.onSubmit}>
                    <div className="form-input"> 
                        <label>Exercise Name: </label>
                        <input
                            type="text"
                            required
                            className="form-input__box"
                            value={props.exercise.name
                                ? props.exercise.name
                                : ""
                            }
                            onChange={props.onChangeName}
                        />
                    </div>
                    <div className="form-input">
                        <label>Description: </label>
                        <input 
                            type="text" 
                            className="form-input__box"
                            value={props.exercise.description
                                ? props.exercise.description
                                : ""
                            }
                            onChange={props.onChangeDescription}
                        />
                    </div>
                    <input type="submit" value={props.type + " Exercise"} className="add-btn-form"/>
                </form>
            </div>
        </div>
    )
}

export default ExerciseForm;
