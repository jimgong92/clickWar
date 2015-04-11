var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');

var AuthActions = {
  signup: function(username, password){
    AppDispatcher.dispatch({
      actionType: AuthConstants.SIGNUP,
      username: username,
      password: password
    });
  }
};

module.exports = AuthActions;