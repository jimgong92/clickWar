var React = require('react');
var ReactPropTypes = React.PropTypes;
var TextInput = require('./TextInput');

var AuthField = React.createClass({
  propTypes: {
    className: ReactPropTypes.string,
    usernameId: ReactPropTypes.string,
    passwordId: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired
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
        <TextInput
          className="usernameField"
          id={this.props.usernameId}
          type="text" 
          placeholder="Username"
          onSave={this.props.onSave} />
        <br />
        <TextInput
          className="passwordField"
          id={this.props.passwordId}
          type="password" 
          placeholder="Password"
          onSave={this.props.onSave} />
      </form>
    );
  }
});

module.exports = AuthField;