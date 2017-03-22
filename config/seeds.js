// Our database file needs access to the environment variables, but this file is run outside of our app.  So we must require dotenv seperately.
// Load env variable from .env file
require('dotenv').config()

var mongoose = require('./database'),
	Test = require('../models/test'),
	Exercise = require('../models/exercise'),
	Method = require('../models/method')


var method1 = new Method({
	name: 'search',
	language: 'JavaScript',
	version_added: 'JavaScript 1.2',
	description: 'This method can be applied to any string and\
 takes a string or regular expression as an argument.\
 It returns the index of the first match, or -1 if there is no match.',
	docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search'
})

mongoose.connection.close()
process.exit()

// Clear out DB

// Exercise.remove({}, function(err) {
// 	console.log('Removed all exercise.')
// 	if (err) throw err
// 	Method.remove({}, function(err) {
// 		console.log('Removed all methods.')
// 		if (err) throw err

	// Seed methods

	// var method1 = new Method({
	// 	name: 'search',
	// 	language: 'JavaScript',
	// 	version_added: 'JavaScript 1.2',
	// 	description: 'This method can be applied to any string and\
	//  takes a string or regular expression as an argument.\
	//  It returns the index of the first match, or -1 if there is no match.',
	// 	docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search'
	// })

	// method1.save()
	// console.log('Seeded method 1')

	// var method2 = new Method({
	// 	name: 'map',
	// 	language: 'JavaScript',
	// 	version_added: 'JavaScript 1.6',
	// 	description: 'This method is passed to arrays, and\
	//  takes a current value, starting index, and a callback as arguments.\
	//  It returns a new array, made by running the callback on the initial array.',
	// 	docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
	// })

	// method2.save()
	// console.log('Seeded method 2')

	// var method3 = new Method({
	// 	name: 'charCodeAt',
	// 	language: 'JavaScript',
	// 	version_added: 'JavaScript 1.2',
	// 	description: 'This method can be applied to any string and\
	//  takes an index for an argument. It returns the UTF-16 code of the character\
	//  at that index.',
	// 	docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt'
	// })

	// method3.save()
	// console.log('Seeded method 3')

	// // Seed exercises

	// var exercise1 = new Exercise({
	// 	name: 'dashType',
	// 	method: method3,
	// 	difficulty: 2,
	// 	prompt: 'Given a single dash as a string, return its type as a string - "em", "en", or "hyphen".\
	// 	This might be a good resource: http://www.thepunctuationguide.com/hyphen-and-dashes.html.',		
	// 	tests: [
	// 		{
	// 			explanation: 'Testing the three basic types, should return em.',
	// 			invocation: "dashType('—')",
	// 			expectation: 'em'
	// 		},
	// 		{
	// 			explanation: 'Testing the three basic types, should return en.',
	// 			invocation: "dashType('-')",
	// 			expectation: 'en'
	// 		},
	// 		{
	// 			explanation: 'Testing the three basic types, should return hyphen.',
	// 			invocation: "dashType('–')",
	// 			expectation: 'hyphen'
	// 		},
	// 	]
	// })

	// exercise1.save()
	// console.log('Seeded exercise 1')


	// console.log('Done seeding.')

	// mongoose.connection.close()
	// process.exit()

// 	})
// })




