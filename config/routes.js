var router = function(app, passport){
  app.get('/', function(req, res){
    res.render('Hello World');
  });

  app.get('/signup', function(req, res){

  });

  app.get('/login', function(req, res){

  });
  app.get('/profile', function(req, res){

  });
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
}

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}
module.exports = router;