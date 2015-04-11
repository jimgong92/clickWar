var React = require('react');
var ReactPropTypes = React.PropTypes;
var TextInput = require('./TextInput');
var $ = require('jquery');

var AuthField = React.createClass({
  propTypes: {
    className: ReactPropTypes.string,
    usernameId: ReactPropTypes.string,
    passwordId: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired
  },
  _onSave: function(){
    var username = $('#signup-username').val().trim();
    var password = $('#signup-password').val().trim();
    this.props.onSave(username, password);
  },
  render: function(){
    return (
      <form>
        <TextInput
          className="usernameField"
          id={this.props.usernameId}
          type="text" 
          placeholder="Username"
          onSave={this._onSave} />
        <br />
        <TextInput
          className="passwordField"
          id={this.props.passwordId}
          type="password" 
          placeholder="Password"
          onSave={this._onSave} />
      </form>
    );
  }
});

module.exports = AuthField;