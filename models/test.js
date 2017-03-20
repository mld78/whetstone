var mongoose = require('mongoose')

// it's possible the name "method" isn't the best, we could
// consider changing it to function or something.
var testSchema = new mongoose.Schema({
	explanation: String,
	invocation: String,
	expectation: String
})

var Test = mongoose.model('Test', testSchema)

module.exports = Test