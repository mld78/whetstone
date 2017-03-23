////////// API PLUMBING //////////

// Basic setup
var express = require('express'),
    router = express.Router(),
// Parses information from POST
    bodyParser = require('body-parser'),
// Used to manipulate POST methods
    methodOverride = require('method-override')

// Require controllers
var methods = require('../controllers/methods_controller'),
    exercises = require('../controllers/exercises_controller')

// API authentication

function checkStandardKey(req, res, next) {
  // if (req.body.API == "123456789") return next()
  if (true) return next()
  res.json({message:"You are not authorized to carry out that action."})
}

function checkAdminKey(req, res, next) {
  // if (req.body.API == "lookatmeiamadministrator") return next()
  if (true) return next()
  res.json({message:"You must be an administrator to carry out that action."})
};

////////// API ROUTES //////////

// All of these routes are namespaced to begin with /api/

// Root path
router.get('/', function(req, res){
	res.json({message: "Welcome to the Whetstone API! For a full list of API endpoints, visit https://github.com/WDI-project-3/whetstone."})
})

// Method CRUD
router.route('/methods')
  .get(checkStandardKey, methods.indexJSON)
  .post(checkStandardKey,  methods.createJSON)

router.route('/methods/:id')
  .get(checkStandardKey,  methods.showJSON)
  .patch(checkAdminKey,  methods.updateJSON)
  .delete(checkAdminKey,  methods.destroyJSON)

// Exercise CRUD
router.route('/exercises')
  .get(checkStandardKey, exercises.indexJSON)
  .post(checkStandardKey,  exercises.createJSON)

router.route('/exercises/:id')
  .get(checkStandardKey,  exercises.showJSON)
  .patch(checkStandardKey,  exercises.updateJSON)
  .delete(checkAdminKey,  exercises.destroyJSON)


module.exports = router
