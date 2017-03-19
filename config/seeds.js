// Our database file needs access to the environment variables, but this file is run outside of our app.  So we must require dotenv seperately.
// Load env variable from .env file
// require('dotenv').config()

// var mongoose = require('mongoose'),
// 	Method = require('../models/method')

// function seedMethods(task, level){
// 	var Method = new Method({name})
// 	Method.save()
// }

// var methods = [
// 	{
// 		name: 
// 	}
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