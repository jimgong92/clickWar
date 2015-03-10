/**
 * MODULE DEPENDENCIES
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



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
 * Middleware
 */
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


passport.use(new LocalStrategy(function(username, password, done){
  Users.findOne({ username: username}, function(err, user){
    if(err) { return done(err); }
    if(!user){ 
      return done(null, false, { message: 'Incorrect username.' });
    }
    hash(password, user.salt, function(err, hash){
      if(err){return done(err);}
      if(hash == user.hash){
        return done(null, user);
      }
      done(null, false, {message: 'Incorrect password.'});
    });
  });
}));

passport.serializeUser(function(user, done){
  done(null, user.id);
});
passport.deserializeUser(function(id, done){
  Users.findById(id, function(err, user){
    if(err) done(err);
    done(null, user);
  })
});

/**
 * Express Server Configuration
 */
app.set("port", process.env.PORT || 1337);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client'));

app.listen(app.get("port"), function(){
  console.log("Listening on port %d", app.get("port"));
});