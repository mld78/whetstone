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

function updateMethod(req, res) {
  var id = req.params.id

  Method.findById(id, function(err, method) {
    if (err || !method) throw err

  })
}

function destroyMethod(req, res) {
  var id = req.params.id

  Method.remove({_id: id}, function(err) {
    if (err) res.json( {message: `Could not delete Method b/c: ${err}`} )

    res.json({message: 'Method successfully deleted.'});
  })
}

module.exports = {
	index: index,
  show: show,
  newMethod: newMethod,
  createMethod: createMethod,
  updateMethod: updateMethod,
  destroyMethod: destroyMethod
}
