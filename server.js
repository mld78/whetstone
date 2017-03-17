var express      = require('express'),
    mongoose     = require('mongoose'),
    path         = require('path'),
    favicon      = require('serve-favicon'),
    passport     = require('passport'),
    flash        = require('connect-flash'),
    ejsLayouts   = require("express-ejs-layouts"),
    morgan       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    session      = require('express-session'),
    port 		 = process.env.PORT || 3000

// load env variable from .env file
require('dotenv').config()

// create express app
var app = express()

// connect to database
mongoose.connect('mongodb://localhost/whetstone')

// special middle ware
app.use(morgan('dev')) 
app.use(cookieParser())
app.use(bodyParser()) 

// set up view engine and path
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.set("views","./views")

// set up public directory path
app.use(express.static(__dirname + '/public'))

// configure passport
// app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })) 
// app.use(passport.initialize())
// app.use(passport.session()) 
// app.use(flash())
// require('./config/passport')(passport)

// This middleware will allow us to use the current user in the layout
app.use(function (req, res, next) {
  global.user = req.user
  next()
})

// set up routes
var routes = require('./config/routes')
app.use('/', routes)

// listen on port variable
app.listen(port, function(){
	var msg = `Server listening on port ${port}.`
	var bracket = '='.repeat(msg.length+4)
	console.log(`${bracket}\n| ${msg} |\n${bracket}`)
})



