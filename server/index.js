/**
 * MODULE DEPENDENCIES
 */
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var morgan = require('morgan');
var flash = require('connect-flash');

/**
 * Server configuration
 */

var serverConfig = function(app){
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
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  /**
   * Load routes and pass in app and configured passport
   */
  require('./config/routes')(app, passport);

  /**
   * Express Server Configuration
   */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
}

module.exports = serverConfig;