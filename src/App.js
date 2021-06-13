import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Exercises from './Components/Exercises';
import Workout_Tracker from './Components/Workout-Tracker';
import Sign_In from './Components/Sign-In';

function App() {
  return (
    <BrowserRouter>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/exercises" component={Exercises}/>
          <Route exact path="/workout-tracker" component={Workout_Tracker}/>
          <Route exact path="/sign-in" component={Sign_In}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
