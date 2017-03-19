var mongoose = require('mongoose')

var methodSchema = new mongoose.Schema({
	name: String,

})

var Method = mongoose.model('Method', methodSchema)

module.exports = Method