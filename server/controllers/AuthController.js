var User = require('../models/User');

module.exports = {
  signup: function(username, password, callback){
    // clearDB();
    getAllUsers(function(err, users){
      console.log(users);
    });
    // User.create({username: username, password: password}, function(err, data){
    //   if(err){
    //     console.error("Error occurred creating user");
    //     console.error(err);
    //   }
    //   callback(err);
    // });
  }
};

/**
 * Dev Helper Functions
 * Plug-n-play
 */
function getAllUsers(callback){
  User.find({}, function(err, users){
    if(err){
      console.error("Error finding users");
      console.error(err);
    }
    callback(err, users);
  });
}
function clearDB(){
  User.remove({}, function(err){
    if (err){
      console.log("Error clearing database");
      console.log(err);
    }
    console.log("Cleared Database");
  });
}