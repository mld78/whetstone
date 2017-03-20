var mongoose = require('mongoose'),
				Test = require('./exercise'),
				Exercise = require('./exercise')


// it's possible the name "method" isn't the best, we could
// consider changing it to function or something.
var completedExerciseSchema = new mongoose.Schema({
	exercise: {type: mongoose.Schema.ObjectId, ref: 'Exercise'},
	time_elapsed: Date,
	solution: String
})

var CompletedExercise = mongoose.model('CompletedExercise', completedExerciseSchema)

module.exports = CompletedExercise
