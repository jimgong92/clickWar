var React = require('react');
var $ = require('jquery');
var AuthActions = require('../actions/AuthActions')
/**
 * Component Dependencies
 */
var AuthField = require('./AuthField');

var Signup = React.createClass({
  _onSave: function(username, password){
    AuthActions.login(username, password);
  },
  render: function(){
    return (
      <AuthField 
        className="login"
        usernameId="login-username"
        passwordId="login-password"
        onSave={this._onSave} />
    );
  }
});

module.exports = Login;