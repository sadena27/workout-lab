import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import ExerciseDatabase from './Components/Exercise-Database';
import WorkoutLog from './Components/Workout/Workout-Log';
import SignIn from './Components/Sign-In';
import EditExercise from './Components/Exercise-Log/Edit-Exercise';
import EditWorkout from './Components/Workout/Edit-Workout';
import ExerciseLog from './Components/Exercise-Log/Exercise-Log';
import AddWorkout from './Components/Workout/Add-Workout';
import AddExercise from './Components/Exercise-Log/Add-Exercise';

function App() {
  return (
    <BrowserRouter>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/exercises" component={ExerciseDatabase}/>
          <Route exact path="/workout-tracker" component={WorkoutLog}/>
          <Route exact path="/sign-in" component={SignIn}/>
          <Route exact path="/exercise/edit/:workoutID/:exerciseID" component={EditExercise}/>
          <Route exact path="/workout/edit/:id" component={EditWorkout}/>
          <Route exact path="/workout/:id" component={ExerciseLog}/>
          <Route exact path="/workout-tracker/add-workout" component={AddWorkout}/>
          <Route exact path="/workout/:id/add-exercise" component={AddExercise}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
