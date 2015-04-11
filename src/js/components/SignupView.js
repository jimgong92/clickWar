var React = require('react');
var AuthField = require('./AuthField');

var Signup = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  _onSave: function(){

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