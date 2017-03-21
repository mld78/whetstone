var passport = require("passport")

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
  // User.findById({user}, function(err, user){
  //   if (err) throw err
  //   response.render('./user/dashboard', {user: user})
  // })
}

function exercises(request, response){
  response.render('./user/exercises')
  // User.findById({user}, function(err, user){
  //   if (err) throw err
  //   response.render('./user/dashboard', {user: user})
  // })
}


function runCode(request, response){
  response.render('./user/exercises')
  // User.findById({user}, function(err, user){
  //   if (err) throw err
  //   response.render('./user/dashboard', {user: user})
  // })
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
