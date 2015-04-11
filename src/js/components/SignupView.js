var React = require('react');
var $ = require('jquery');
var AuthActions = require('../actions/AuthActions')
/**
 * Component Dependencies
 */
var AuthField = require('./AuthField');

var Signup = React.createClass({
  _onSave: function(username, password){
    console.log('hre');
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