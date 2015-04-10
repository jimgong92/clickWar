var React = require('react');
var UsernameField = require('./UsernameFieldView');
var PasswordField = require('./PasswordFieldView');

var AuthField = React.createClass({
  propTypes: {

  },
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  render: function(){
    return (
      <form>
        <UsernameField />
        <br />
        <PasswordField />
      </form>
    );
  }
});

module.exports = AuthField;