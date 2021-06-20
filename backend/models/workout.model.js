const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Exercise = require('../models/exercise.model');

const workoutSchema = new Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    exercises: [Exercise.schema],
}, {
    timestamps: true,
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
