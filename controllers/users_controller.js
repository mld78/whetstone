var passport = require("passport"),
    hackerEarth = require('hackerearth-node')

// Authentication: sign up and log in

function getSignup(request, response) {
  response.render('./static_pages/signup.ejs', { message: request.flash('signupMessage') });
}

function postSignup(request, response) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/dashboard',
    failureRedirect : '/signup',
    failureFlash : true
  });
  return signupStrategy(request, response);
}

function getLogin(request, response) {
  response.render('./static_pages/login.ejs', { message: request.flash('loginMessage') });
}

function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/dashboard',
    failureRedirect : '/login',
    failureFlash : true
  })

  return loginProperty(request, response);
}

function getLogout(request, response) {
  request.logout()
  response.redirect('/')
}

// Facebook authentication
function getFacebook(request, response) {
  var signupStrategy = passport.authenticate('facebook', {
    scope : 'email'
  })

  return signupStrategy(request, response)
}

function getFacebookCallback(request, response) {
  var loginProperty = passport.authenticate('facebook', {
    successRedirect : '/',
    failureRedirect : './static_pages/login'
  })
  return loginProperty(request, response)
}

// Dashboard

function dashboard(request, response){
  response.render('./user/dashboard')
}

// Exercises

function exercises(request, response){
  response.render('./user/exercises')
}


function runCode(request, response){
  var myHackerEarth = new hackerEarth(
    'f9b2f2ccf14ecad5c5119bc986c9d96f7598191a',  //Your Client Secret Key here this is mandatory
    ''  //mode sync=1 or async(optional)=0 or null async is by default and preferred for nodeJS
  )
  var config = {}
  config.time_limit = 5
  config.memory_limit = 323244
  config.source = request.body.source
  config.language = "JAVASCRIPT"

  myHackerEarth.run(config,function(err,data){
      if (err) throw err
      response.json(data)
  });
}


module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  getFacebook: getFacebook,
  getFacebookCallback: getFacebookCallback,

  dashboard: dashboard,
  runCode: runCode,
  exercises: exercises
}
