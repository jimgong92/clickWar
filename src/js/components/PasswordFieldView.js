var React = require('react');

var PasswordField = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return (
      <input 
        type="password" 
        placeholder="Password"
        value={this.state.value} 
        onChange={this.handleChange} />
    );
  }
});

module.exports = PasswordField;