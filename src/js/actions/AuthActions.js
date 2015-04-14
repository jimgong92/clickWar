var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');

var AuthActions = {
  signup: function(email, password){
    AppDispatcher.dispatch({
      actionType: AuthConstants.SIGNUP,
      email: email,
      password: password
    });
  },
  login: function(email, password){
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN,
      email: email,
      password: password
    });
  }
};

module.exports = AuthActions;