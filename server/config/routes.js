var router = function(app, passport){
  /**
   * Click Page
   */
  app.get('/home', function(req, res){
    // res.send(200);
  });
  app.post('/home', function(req, res){

  });
  /**
   * Signup/Login
   */
  app.get('/api/signup', function(req, res){

  });
  app.post('/api/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup', 
    failureFlash: true
  }));
  app.get('/api/login', function(req, res){

  });
  app.post('/api/login', function(req, res){

  });
  /**
   * Protected by auth, must be logged in
   */
  app.get('/api/profile', isLoggedIn, function(req, res){

  });
  /**
   * Logout
   */
  app.get('/api/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
}

/**
 * Validates login
 */
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}
module.exports = router;