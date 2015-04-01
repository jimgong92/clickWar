/**
 * Dependencies
 */
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

/**
 * Passport Configuration
 */
var configuration = function(passport){
  /**
   * Session Setup
   */
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user);
    });
  });
  /**
   * 
   */
}
module.exports = configuration;