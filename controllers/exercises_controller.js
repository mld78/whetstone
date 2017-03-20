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
