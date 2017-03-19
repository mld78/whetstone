var mongoose = require('mongoose')

// it's possible the name "method" isn't the best, we could
// consider changing it to function or something.
var methodSchema = new mongoose.Schema({
	name: String,
	language: String,
	version_added: String,
// if we decide to expand this, it might be wise to use a more
// descriptive word for this metric, like "obscurity". But
// we'd also have to figure a way to quantify it.
	difficulty: Number,
	description: String,
	docs_url: String
})

var Method = mongoose.model('Method', methodSchema)

module.exports = Method