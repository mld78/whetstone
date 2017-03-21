///// PLUMBING /////

// Basic setup
var express = require('express'),
    router = express.Router(),
// Parses information from POST
    bodyParser = require('body-parser'),
// Used to manipulate POST methods
    methodOverride = require('method-override'),
    passport = require("passport")

// Require controllers
var usersController = require('../controllers/users_controller'),
    methodsController = require('../controllers/methods_controller'),
    exercisesController = require('../controllers/exercises_controller'),
    staticPagesController = require('../controllers/static_pages_controller')

// Routes helpers

function authenticateUser(request, response, next) {
  // If the user is authenticated, then we continue the execution
  if (request.isAuthenticated()) return next()
  // Otherwise the request is always redirected to the login page
  response.redirect('/login')
}

///// ROUTES /////

// Root path
router.get('/', function(request, response){
	response.render('./static_pages/index.ejs')
})

// Static Pages

router.route('/about')
	.get(staticPagesController.about)

// Authentication Routes

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route('/logout')
  .get(usersController.getLogout)

// route for facebook authentication and login
router.route('/auth/facebook')
  .get(usersController.getFacebook)

// handle the callback after facebook has authenticated the user
router.route('/auth/facebook/callback')
  .get(usersController.getFacebookCallback)


// User routes

router.route('/dashboard')
	.get(authenticateUser, usersController.dashboard)

router.route('/exercises')
	// .get(authenticateUser, usersController.exercises)
	.get(usersController.exercises)
	.post(usersController.runCode)

// Exercises routes

router.route('/json/exercises')
	.get(exercisesController.index)

router.route('/json/exercises/:id')
	.get(exercisesController.show)

module.exports = router
