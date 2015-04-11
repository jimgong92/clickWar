var React = require('react');
var AuthField = require('./AuthField');
var $ = require('jquery');

var Signup = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  _onSave: function(){
    console.log($('#signup-username').val());
    this.setState({
      username: $('#signup-username').val(),
      password: $('#signup-password').val()
    });
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