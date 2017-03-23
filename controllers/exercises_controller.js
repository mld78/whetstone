var Exercise = require('../models/exercise')
var Method = require('../models/method')

// Interface paths

// API paths


// INDEX
function index(req, res) {
  Exercise.find({}, function(err, exercises) {
    if (err) throw err
    res.json(exercises)
  })
}


// NEW
function newExercise(req, res) {
  Method.find({}, function(err, methods) {
    if (err) throw err

  res.render(`./admin/exercise_form.ejs`,
    {
      methods: methods,
      message: req.flash(`adminMessage`)
    })
  })
}


// CREATE
function createExercise(req, res) {
  var newExercise = new Exercise(req.body)
  newExercise.save(function(err, savedExercise) {
    if (err) throw err
    res.json(savedExercise)
  })
}


// SHOW
function show(req, res) {
  var id = req.params.id

  Exercise.findById(id, function(err, exercises) {
    if(err) throw err
    res.json(exercises)
  })
}


// EDIT
function editExercise(req, res) {
  var id = req.params.id
  Method.find({}, function(err, methods){
    if (err) throw err

  Exercise.findById({_id: id}, function(err, exercise) {
    if (err) throw err
    res.render(`./admin/edit_exercise_form.ejs`,
      {
        message: req.flash(`adminMessage`),
        exercise: exercise,
        methods: methods,
        destroyExercise: destroyExercise
      })
    })
  })
}


// UPDATE
function updateExercise(req, res) {
  var id = req.params.id

  Exercise.findById({_id: id}, function(err, updatedExercise) {
    if (err || !updatedExercise) throw err

    if (req.body.name) updatedExercise.name = req.body.name
    if (req.body.method) updatedExercise.method = req.body.method
    if (req.body.difficulty) updatedExercise.difficulty = req.body.difficulty
    if (req.body.prompt) updatedExercise.prompt = req.body.prompt
    if (req.body.tests) updatedExercise.tests = req.body.tests

    updatedExercise.save(function(err, savedExercise) {
      if (err) throw err
      res.json(savedExercise)
    })
  })
}


// DELETE
function destroyExercise(req, res) {
  var id = req.params.id
  // var areYouSure = prompt(`ARE YOU SURE YOU WANT TO DELETE THIS METHOD?\nType: "YES DELETE METHOD"\n\n${req.body}`)
  // if (areYouSure === "YES DELETE METHOD") {

    Exercise.remove({_id: id}, function(err) {
      if (err) res.json( {message: `Could not delete Exercise b/c: ${err}`} )

      res.json({message: 'Exercise successfully deleted.'});
    })

  // }
}

// EXPORTS
module.exports = {
 index: index,
 show: show,
 newExercise: newExercise,
 createExercise: createExercise,
 editExercise: editExercise,
 updateExercise: updateExercise,
 destroyExercise: destroyExercise
}
