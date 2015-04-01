var router = function(app, passport){
  /**
   * Click Page
   */
  app.get('/', function(req, res){
    res.render('Hello World');
  });
  app.post('/', function(req, res){

  });
  /**
   * Signup/Login
   */
  app.get('/signup', function(req, res){

  });
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup', 
    failureFlash: true
  }));
  app.get('/login', function(req, res){

  });
  app.post('/login', function(req, res){

  });
  /**
   * Protected by auth, must be logged in
   */
  app.get('/profile', isLoggedIn, function(req, res){

  });
  /**
   * Logout
   */
  app.get('/logout', function(req, res){
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