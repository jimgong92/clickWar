var AuthController = require('../controllers/AuthController');
var router = function(app, passport){
  /**
   * Click Page
   */
  app.get('/home', isLoggedIn, function(req, res){
    // res.send(200);
  });
  /**
   * Signup/Login
   */
  app.get('/auth', function(req, res){
    AuthController.signup(); //Helper to check DB
  });
  app.post('/api/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/auth', 
    failureFlash: true
  }));
  app.post('/api/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/auth', 
    failureFlash: true
  }));
  /**
   * Protected by auth, must be logged in
   */
  app.get('/profile', isLoggedIn, function(req, res){

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
  res.redirect('/auth');
}
module.exports = router;