var Exercise = require('../models/exercise')

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

module.exports = {
 index: index,
 show: show
}
