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
   * LOCAL SIGNUP
   */
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
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

  /**
   * LOCAL LOGIN
   */
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
    User.findOne({'local.email' : email}, function(err, user){
      if(err){
        return done(err);
      }
      if (!user){
        return done(null, false, req.flash('loginMessage', 'No user found with that email.'));
      }
      if (!user.isValidPassword(password)){
        return done(null, false, req.flash('loginMessage', 'Incorrect password.'));
      }
      return done(null, user);
    });
  }));
};

module.exports = configuration;