import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Exercises from './Components/Exercises';
import WorkoutTracker from './Components/Workout-Tracker';
import SignIn from './Components/Sign-In';
import EditExerciseLog from './Components/Exercise-Log/Edit-Exercise-Log';
import EditWorkoutLog from './Components/Workout-Log/Edit-Workout-Log';


function App() {
  return (
    <BrowserRouter>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/exercises" component={Exercises}/>
          <Route exact path="/workout-tracker" component={WorkoutTracker}/>
          <Route exact path="/sign-in" component={SignIn}/>
          <Route exact path="/exercise/edit/:id" component={EditExerciseLog}/>
          <Route exact path="/workout/edit/:id" component={EditWorkoutLog}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
