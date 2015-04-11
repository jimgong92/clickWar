var React = require('react');
var $ = require('jquery');
var AuthActions = require('../actions/AuthActions');
var AuthStore = require('../stores/AuthStore');
/**
 * Component Dependencies
 */
var AuthField = require('./AuthField');

var Signup = React.createClass({
  _onSave: function(username, password){
    AuthActions.signup(username, password);
  },
  render: function(){
    return (
      <AuthField 
        className="signup"
        usernameId="signup-username"
        passwordId="signup-password"
        onSave={this._onSave} />
    );
  }
});

module.exports = Signup;