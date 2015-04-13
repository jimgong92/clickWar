var React = require('react');
var ReactPropTypes = React.PropTypes;
var $ = require('jquery');
/**
 * Component Dependencies
 */
var TextInput = require('./TextInput');

var AuthField = React.createClass({
  propTypes: {
    className: ReactPropTypes.string,
    emailId: ReactPropTypes.string,
    passwordId: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired
  },
  _onSave: function(){
    var email = $('#signup-email').val().trim();
    var password = $('#signup-password').val().trim();
    if (email && password) {
      this.props.onSave(email, password);
    }
  },
  render: function(){
    return (
      <form className={this.props.className}>
        <TextInput
          className="emailField"
          id={this.props.emailId}
          type="text" 
          placeholder="Email"
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