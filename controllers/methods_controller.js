var Method = require('../models/method')

// Interface paths

// API paths

function index(req, res) {
  Method.find({}, function(err, methods) {
    if (err) throw err
    res.json(methods)
  })
}

function show(req, res) {
  var id = req.params.id

  Method.findById(id, function(err, methods) {
    if (err) throw err
    res.json(methods)
  })
}

function newMethod(req, res) {
  res.render(`./admin/method_form.ejs`,
    {
      message: req.flash(`adminMessage`)
    })
}

function createMethod(req, res) {
  var newMethod = new Method(req.body)
  newMethod.save(function(err, savedMethod) {
    if (err) throw err
    res.json(savedMethod)
  })
}

module.exports = {
	index: index,
  show: show,
  newMethod: newMethod,
  createMethod: createMethod
}
