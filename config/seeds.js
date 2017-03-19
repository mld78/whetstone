// Our database file needs access to the environment variables, but this file is run outside of our app.  So we must require dotenv seperately.
// Load env variable from .env file
require('dotenv').config()

var mongoose = require('mongoose'),
	Method = require('../models/method')

function seedMethods(task, level){
	var Method = new Method({name})
	Method.save()
}

var methods = [
	{
		name: 'search',
		language: 'JavaScript',
		version_added: 'JavaScript 1.2',
		difficulty: 3,
		description: 'This method can be applied to any string and\
 takes a string or regular expression as an argument.\
 It returns the index of the first match, or -1 if there is no match.',
		docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search'
	},
	{
		name: 'map',
		language: 'JavaScript',
		version_added: 'JavaScript 1.6',
		difficulty: 7,
		description: 'This method is passed to arrays, and\
 takes a current value, starting index, and a callback as arguments.\
 It returns a new array, made by running the callback on the initial array.',
		docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
	},
	{
		name: 'charCodeAt',
		language: 'JavaScript',
		version_added: 'JavaScript 1.2',
		difficulty: 4,
		description: 'This method can be applied to any string and\
 takes an index for an argument. It returns the UTF-16 code of the character\
 at that index.',
		docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt'
	},
]


Method.remove({}, function(err) {
	if (err) throw err
	Method.create(methods, function(err, methods) {
		if (err) throw err
		console.log(`Database seeded with ${methods.length} methods.`)
		mongoose.connection.close()
		process.exit()
	})
})