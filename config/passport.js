var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/**
 * Passport Configuration
 */
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

