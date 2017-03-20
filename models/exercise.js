var mongoose = require('mongoose'),
				Test = require('./test')


// it's possible the name "method" isn't the best, we could
// consider changing it to function or something.
var exerciseSchema = new mongoose.Schema({
	name: String,
	method: {type: mongoose.Schema.ObjectId, ref: 'Method'},
	difficulty: Number,
	prompt: String,
	tests: [Test.schema]
})

var Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
