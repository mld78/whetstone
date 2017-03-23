var mongoose = require('mongoose')

// it's possible the name "method" isn't the best, we could
// consider changing it to function or something.
var methodSchema = new mongoose.Schema({
	name: String,
	language: String,
	version_added: String,
	description: String,
	docs_url: String,
	slug_url: String
})

var Method = mongoose.model('Method', methodSchema)

module.exports = Method
