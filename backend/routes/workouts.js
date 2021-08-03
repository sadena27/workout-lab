const router = require('express').Router();
let Workout = require('../models/workout.model');

// Gets all workouts
router.route('/').get((req, res) => {
    Workout.find()
        .then(workout => res.json(workout))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Adds a new workout
router.route('/add').post((req, res) => {
    const user = req.body.user;
    const name = req.body.name;
    const date = Date.parse(req.body.date);
    const exercises = req.body.exercises;

    const newWorkout = new Workout({
        user,
        name,
        date,
        exercises
    });

    newWorkout.save()
        .then(() => res.json('Workout added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Gets a particular workout
router.route('/:id').get((req, res) => {
    Workout.findById(req.params.id)
      .then(workout => res.json(workout))
      .catch(err => res.status(400).json('Error: ' + err));
});

// Deletes a workout
router.route('/:id').delete((req, res) => {
    Workout.findByIdAndDelete(req.params.id)
      .then(() => res.json('Workout deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

// Edits a workout (usually the name and date)
router.route('/update/:id').post((req, res) => {
  Workout.findById(req.params.id)
    .then(workout => {
      workout.name = req.body.name;
      workout.date = Date.parse(req.body.date);
      workout.exercises = req.body.exercises;

      workout.save()
        .then(() => res.json('Workout updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Adds a new exercise to a workout
router.route('/addExercise/:workoutID').post((req, res) => {
  Workout.findById(req.params.workoutID)
    .then(workout => {
      workout.exercises.push(req.body);

      workout.save()
        .then(() => res.json('Exercise added to workout!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Edits existing exercise in a workout
router.route('/editExercise/:workoutID/:exerciseID').post((req, res) => {
  Workout.findById(req.params.workoutID)
    .then(workout => {
      workout.exercises.forEach((exercise, index) => {
        if (exercise._id == req.params.exerciseID) {
          workout.exercises[index] = req.body
        }
      })

      workout.save()
        .then(() => res.json('Edited exercise in workout!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Gets a specific exercise from a workout
router.route('/:workoutID/:exerciseID').get((req, res) => {
  Workout.findById(req.params.workoutID)
    .then(workout => {
      res.json(workout.exercises.find(exercise => exercise._id == req.params.exerciseID))
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Deletes a specific exercise from a workout
router.route('/deleteExercise/:id').post((req, res) => {
  const id = req.body.id;
  
  Workout.findById(req.params.id)
    .then(workout => {
      workout.exercises = workout.exercises.filter(exercise => exercise._id != id)
      
      workout.save()
        .then(() => res.json('Exercise deleted from workout!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;