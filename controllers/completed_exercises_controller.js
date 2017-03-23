var Exercise = require('../models/exercise'),
    Method = require('../models/method'),
    User = require('../models/user'),
    CompletedExercise = require('../models/completed_exercise')


function create(request,response){
	// find the user
	User.findById(request.body.user_id, function(err, user) {
		if (err) throw err

		// find the exercise
		Exercise.findById(request.body.exercise_id, function(err, exercise){
			if (err) throw err

			user.completed_exercises.push({
				exercise: exercise.id,
				time_started: request.body.start,
				time_completed: request.body.end,
				solution: request.body.solution
			})

			user.save(function(err, user) {
				if (err) throw err
				response.redirect('/dashboard')
			})
		})
	})
}

module.exports = {
 create: create
}