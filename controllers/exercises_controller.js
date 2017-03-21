var Exercise = require('../models/exercise')
var Method = require('../models/method')

// Interface paths

// API paths

function index(req, res) {
  Exercise.find({}, function(err, exercises) {
    if (err) throw err
    res.json(exercises)
  })
}

function show(req, res) {
  var id = req.params.id

  Exercise.findById(id, function(err, exercises) {
    if(err) throw err
    res.json(exercises)
  })
}

function newExercise(req, res) {
  Method.find({}, function(err, methods){
    if (err) throw err

  res.render(`./admin/exercise_form.ejs`,
    {methods: methods,
      message: req.flash(`adminMessage`)
    })
  })
}

function createExercise(req, res) {
  var newExercise = new Exercise(req.body)
  newExercise.save(function(err, savedExercise) {
    if (err) throw err
    res.json(savedExercise)
  })
}

module.exports = {
 index: index,
 show: show,
 newExercise: newExercise,
 createExercise: createExercise
}
