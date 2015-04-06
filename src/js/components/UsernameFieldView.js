var React = require('react');

var UsernameField = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    };
  },
  handleChange: function(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return (
      <input 
        type="text" 
        value={this.state.value} 
        placeholder="Username" 
        onChange={this.handleChange} />
    );
  }
});

module.exports = UsernameField;