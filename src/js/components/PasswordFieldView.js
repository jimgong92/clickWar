var React = require('react');
var ReactPropTypes = React.PropTypes;

var TextInput = require('./TextInput');

var PasswordField = React.createClass({
  propTypes: {
    id: React.PropTypes.String
  },
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return (
      <TextInput
        className="passwordField"
        id={this.props.id}
        type="password" 
        placeholder="Password"
        onChange={this.handleChange} />
    );
  }
});

module.exports = PasswordField;