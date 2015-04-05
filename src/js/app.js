var React = require('react');
var Router = require('react-router');

/**
 * Components
 */ 
var Signup = require('./components/SignupView');

React.render(
  <Signup />,
  document.getElementById('app')
);