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
   * Local Signup
   */
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
    console.log('here');
    process.nextTick(function(){
      User.findOne({'local.email' : email}, function(err, user){
        if(err){
          return done(err);
        }
        if (user){
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        }
        else {
          var newUser = new User();
          /**
           * Set local credentials
           */
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.save(function(err){
            if(err){
              throw err;
            }
            return done(null, newUser);
          });
        }
      });
    });
  }));
};

module.exports = configuration;