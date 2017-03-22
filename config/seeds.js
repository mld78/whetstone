// Our database file needs access to the environment variables, but this file is run outside of our app.  So we must require dotenv seperately.
// Load env variable from .env file
require('dotenv').config()

var mongoose = require('./database'),
	Test = require('../models/test'),
	Exercise = require('../models/exercise'),
	Method = require('../models/method')

var methods = [{
	name: 'search',
	language: 'JavaScript',
	version_added: 'JavaScript 1.2',
	description: 'This method can be applied to any string and takes a string or regular expression as an argument. It returns the index of the first match, or -1 if there is no match.',
	docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search'
},
{
	name: 'map',
	language: 'JavaScript',
	version_added: 'JavaScript 1.6',
	description: 'This method is passed to arrays, and takes a current value, starting index, and a callback as arguments. It returns a new array, made by running the callback on the initial array.',
	docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
}
]

var fixedMethod = new Method({	
	name: 'charCodeAt',
	language: 'JavaScript',
	version_added: 'JavaScript 1.2',
	description: 'This method can be applied to any string and takes an index for an argument. It returns the UTF-16 code of the character at that index.',
	docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt'
})

var exercises = [	
{	name: 'dashType',
	// enter the method name, the seeds file will take care of finding the id
	method: fixedMethod.id,
	difficulty: 2,
	prompt: 'Given a single dash as a string, return its type as a string - "em", "en", or "hyphen".\
	This might be a good resource: http://www.thepunctuationguide.com/hyphen-and-dashes.html.',		
	tests: [
		{
			explanation: 'Testing the three basic types, should return em.',
			invocation: "dashType('—')",
			expectation: 'em'
		},
		{
			explanation: 'Testing the three basic types, should return en.',
			invocation: "dashType('-')",
			expectation: 'en'
		},
		{
			explanation: 'Testing the three basic types, should return hyphen.',
			invocation: "dashType('–')",
			expectation: 'hyphen'
		},
	]
}
]

Exercise.remove({}, function(err) {
	if (err) throw err
	console.log('Cleared exercises.')
	Method.remove({}, function(err) {
		if (err) throw err
		console.log('Cleared methods.')
		Method.create(methods, function(err, methods) {
			if (err) throw err
			console.log(`Seeded ${methods.length} methods.`)
			Exercise.create(exercises, function(err, exercises) {
				if (err) throw err
				console.log(`Seeded ${exercises.length} exercises.`)
		// Close connection and exit 
				mongoose.connection.close()
				process.exit()
})})})})

