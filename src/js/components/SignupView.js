var React = require('react');
var AuthField = require('./AuthField');
var $ = require('jquery');

var Signup = React.createClass({
  _onSave: function(username, password){
    
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