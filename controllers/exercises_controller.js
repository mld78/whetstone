var Method = require('../models/exercise')

module.exports = {
 index: index,
 show: show
}

function index(req, res) {
  Method.find({}, function(err, methods) {
    if (err) throw err
    res.json(methods)
  })
}

function show(req, res) {
  var id = req.params.id

  Method.findById(id, function(err, methods) {
    if(err) throw err

    res.json(methods)
  })
}
