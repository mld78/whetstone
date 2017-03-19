var express = require('express'),
	router  = new express.Router()

// require controllers
var {index} = require('../controllers/methods_controller')

// root path
router.route('/')
	.get(index)




module.exports = router