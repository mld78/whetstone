var passport = require("passport")

// GET /signup

function getSignup(request, response) {
  response.render('signup.ejs', { message: request.flash('signupMessage') });
}

// POST /signup

function postSignup(request, response) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  });
  return signupStrategy(request, response);
}

// GET /login
// POST /login
// GET /logout
