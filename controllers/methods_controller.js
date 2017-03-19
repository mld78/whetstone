var Method = require('../models/method')

function index(req,res){
	res.render('static_pages/index')
}

module.exports = {
	index: index
}