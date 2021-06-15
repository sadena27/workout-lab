import React, { useState } from 'react';
import axios from 'axios';

function Sign_In() {
    const [username, setUsername] = useState({username: ''});

    const onChangeUsername = (e) => {
        setUsername({username: e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username.username
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        setUsername({username: ''});
    }
    
    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
            <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={username.username}
                    onChange={onChangeUsername}
                    />
            </div>
            <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
            </form>
      </div>
    )
}

export default Sign_In;
