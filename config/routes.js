var express = require('express'),
    router = express.Router(),
// Parses information from POST
    bodyParser = require('body-parser'),
// Used to manipulate POST methods
    methodOverride = require('method-override'),
    passport = require("passport"),
    usersController = require('../controllers/users_controller'),
// require controllers
    {index} = require('../controllers/methods_controller')

// root path
router.get('/', function(req,res){
	res.json({message:"Hello, World"})
})

function authenticateUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next()

  // Otherwise the request is always redirected to the home page
  res.redirect('/')
}

// Local authentication routes

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route("/logout")
  .get(usersController.getLogout)

// Facebook authentication routes

// route for facebook authentication and login
router.route("/auth/facebook")
  .get(usersController.getFacebook)

// handle the callback after facebook has authenticated the user
router.route("/auth/facebook/callback")
  .get(usersController.getFacebookCallback)


// Password-protected routes

router.route("/secret")
  .get(authenticateUser, usersController.secret)





module.exports = router
