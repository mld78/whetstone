var express = require('express'),
	router  = new express.Router()

// require controllers
var {index} = require('../controllers/methods_controller')

// root path
router.get('/', function(req,res){
	res.json({message:"Hello, World"})
})




module.exports = router