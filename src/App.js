import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Exercises from './Exercises';
import Workout_Creator from './Workout-Creator';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/exercises" component={Exercises}/>
          <Route exact path="/workout-creator" component={Workout_Creator}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
