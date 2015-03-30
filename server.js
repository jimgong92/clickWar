/**
 * MODULE DEPENDENCIES
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var morgan = require('morgan');

/**
 * Create Express Server
 */
var app = express(); 

/**
 * MongoDB connection
 */
mongoose.connect("mongodb://localhost/clickWar");
mongoose.connection.on("error", function(err) {
  console.error(err);
  console.error("MongoDB Connection Error.");
});

/**
 * Pass passport for configuration
 */
require('./config/passport')(passport);

/**
 * Middleware
 */
app.use(morgan('dev'));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
  secret: "SECRET",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

/**
 * Load routes and pass in app and configured passport
 */
require('./config/routes')(app, passport);

/**
 * Express Server Configuration
 */
app.set("port", process.env.PORT || 1337);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/src'));

app.listen(app.get("port"), function(){
  console.log("Listening on port %d", app.get("port"));
});