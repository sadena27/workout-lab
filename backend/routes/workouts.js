const router = require('express').Router();
let Workout = require('../models/workout.model');

router.route('/').get((req, res) => {
    Workout.find()
        .then(workout => res.json(workout))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const date = Date.parse(req.body.date);
    const exercises = req.body.exercises;

    const newWorkout = new Workout({
        name,
        date,
        exercises
    });

    newWorkout.save()
        .then(() => res.json('Workout added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Workout.findById(req.params.id)
      .then(workout => res.json(workout))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
    Workout.findByIdAndDelete(req.params.id)
      .then(() => res.json('Workout deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
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

module.exports = router;