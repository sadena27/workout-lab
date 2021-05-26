import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Exercises from './Exercises';
import Workout_Creator from './Workout-Creator';
import Sign_In from './Sign-In';

function App() {
  return (
    <BrowserRouter>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/exercises" component={Exercises}/>
          <Route exact path="/workout-creator" component={Workout_Creator}/>
          <Route exact path="/sign-in" component={Sign_In}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
