import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import '../Form.css';

function WorkoutForm(props) {
    return (
        <div className="form">
            <h3>{props.type} Workout</h3>
                <form onSubmit={props.onSubmit}>
                    <div className="form-input"> 
                        <label>Workout Name:</label>
                        <input
                            type="text"
                            required
                            className="form-input__box"
                            onChange={props.onChangeName}
                            value={props.workout.name}
                            />
                    </div>
                    <div className="form-input">
                        <label>Date: </label>
                        <div>
                            <DatePicker selected={props.workout.date} onChange={props.onChangeDate}/>
                        </div>
                    </div>
                    <input type="submit" value={props.type + " Workout"} className="add-btn"/>
                </form>
        </div>
    )
}

export default WorkoutForm;
