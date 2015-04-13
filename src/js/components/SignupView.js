var React = require('react');
var $ = require('jquery');
var AuthActions = require('../actions/AuthActions');
var AuthStore = require('../stores/AuthStore');
/**
 * Component Dependencies
 */
var AuthField = require('./AuthField');

var Signup = React.createClass({
  _onSave: function(email, password){
    AuthActions.signup(email, password);
  },
  render: function(){
    return (
      <AuthField 
        className="signup"
        emailId="signup-email"
        passwordId="signup-password"
        onSave={this._onSave} />
    );
  }
});

module.exports = Signup;