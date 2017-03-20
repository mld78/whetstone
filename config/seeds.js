// Our database file needs access to the environment variables, but this file is run outside of our app.  So we must require dotenv seperately.
// Load env variable from .env file
// require('dotenv').config()

// var mongoose = require('./database'),
// 	Test = require('../models/test'),
// 	Exercise = require('../models/exercise'),
// 	Method = require('../models/method')

// // Seed methods

// var methods = [
// 	{
// 		name: 'search',
// 		language: 'JavaScript',
// 		version_added: 'JavaScript 1.2',
// 		description: 'This method can be applied to any string and\
//  takes a string or regular expression as an argument.\
//  It returns the index of the first match, or -1 if there is no match.',
// 		docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search'
// 	},
// 	{
// 		name: 'map',
// 		language: 'JavaScript',
// 		version_added: 'JavaScript 1.6',
// 		description: 'This method is passed to arrays, and\
//  takes a current value, starting index, and a callback as arguments.\
//  It returns a new array, made by running the callback on the initial array.',
// 		docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
// 	},
// 	{
// 		name: 'charCodeAt',
// 		language: 'JavaScript',
// 		version_added: 'JavaScript 1.2',
// 		description: 'This method can be applied to any string and\
//  takes an index for an argument. It returns the UTF-16 code of the character\
//  at that index.',
// 		docs_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt'
// 	},
// ]

// Method.remove({}, function(err) {
// 	if (err) throw err
// 	Method.create(methods, function(err, methods) {
// 		if (err) throw err
// 		console.log(`Database seeded with ${methods.length} methods.`)
// 		mongoose.connection.close()
// 		process.exit()
// 	})
// })

// // Seed tests

// var tests = [
// 	{
// 		explanation: 'Testing the three basic types, should return em.',
// 		invocation: "dashType('—')",
// 		expectation: 'em'
// 	},
// 	{
// 		explanation: 'Testing the three basic types, should return en.',
// 		invocation: "dashType('-')",
// 		expectation: 'en'
// 	},
// 	{
// 		explanation: 'Testing the three basic types, should return hyphen.',
// 		invocation: "dashType('–')",
// 		expectation: 'hyphen'
// 	},
// ]

// Test.remove({}, function(err) {
// 	if (err) throw err
// 	Test.create(tests, function(err, tests) {
// 		if (err) throw err
// 		console.log(`Database seeded with ${tests.length} tests.`)
// 		mongoose.connection.close()
// 		process.exit()
// 	})
// })

// // Seed exercises

// var exercises = [
// 	{
// 		name: 'dashType',
// 		method: Method.find({name: "charCodeAt"}, function(err, method){
// 			if (err) throw err
// 			return method.id
// 		}),
// 		difficulty: 2,
// 		prompt: 'Given a single dash as a string, return its type as a string - "em", "en", or "hyphen".\
// 		This might be a good resource: http://www.thepunctuationguide.com/hyphen-and-dashes.html.',
// 		tests: [
// 			Test.find({explanation: "Testing the three basic types, should return em."}, function(err, test){
// 				if (err) throw err
// 				return test
// 			}),
// 			Test.find({explanation: "Testing the three basic types, should return en."}, function(err, test){
// 				if (err) throw err
// 				return test
// 			}),
// 			Test.find({explanation: "Testing the three basic types, should return hyphen."}, function(err, test){
// 				if (err) throw err
// 				return test
// 			})
// 		]
// 	},
// ]

// Exercise.remove({}, function(err) {
// 	if (err) throw err
// 	Exercise.create(exercises, function(err, exercises) {
// 		if (err) throw err
// 		console.log(`Database seeded with ${exercises.length} exercises.`)
// 		mongoose.connection.close()
// 		process.exit()
// 	})
// })


