var Method = require('../models/method')

// Interface paths

// API paths


// INDEX
function index(req, res) {
  Method.find({}, function(err, methods) {
    if (err) throw err
    res.json(methods)
  })
}


// NEW
function newMethod(req, res) {
  res.render(`./admin/method_form.ejs`,
    {
      message: req.flash(`adminMessage`)
    })
}


// CREATE
function createMethod(req, res) {
  var newMethod = new Method(req.body)
  newMethod.save(function(err, savedMethod) {
    if (err) throw err
    res.json(savedMethod)
  })
}


// SHOW
function show(req, res) {
  var id = req.params.id

  Method.findById(id, function(err, methods) {
    if (err) throw err
    res.json(methods)
  })
}

// EDIT
function editMethod(req, res) {
  var id = req.params.id
  Method.findById({_id: id}, function(err, method){
    if (err) throw err
    res.render(`./admin/edit_method_form.ejs`,
      {
        message: req.flash(`adminMessage`),
        method: method
      })
  })
}

// UPDATE
function updateMethod(req, res) {
  var id = req.params.id

  Method.findById(id, function(err, updatedMethod) {
    if (err || !updatedMethod) throw err

    Method.
    res.json(updatedMethod)
  })
}


// DELETE
function destroyMethod(req, res) {
  var id = req.params.id

  if (prompt(`ARE YOU SURE YOU WANT TO DELETE THIS METHOD?\nType: "YES DELETE METHOD"\n\n${req.body}`) === "YES DELETE METHOD") {

    Method.remove({_id: id}, function(err) {
      if (err) res.json( {message: `Could not delete Method b/c: ${err}`} )

      res.json({message: 'Method successfully deleted.'});
    })

  }
}

module.exports = {
	index: index,
  show: show,
  newMethod: newMethod,
  createMethod: createMethod,
  editMethod: editMethod,
  updateMethod: updateMethod,
  destroyMethod: destroyMethod
}
