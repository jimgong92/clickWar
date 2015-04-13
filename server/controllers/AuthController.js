var User = require('../models/User');

module.exports = {
  signup: function(username, password, callback){
    User.create({username: username, password: password}, function(err, data){
      if(err){
        console.error("Error occurred creating user")
        console.error(err);
      }
      callback(err);
    });
  }
};

