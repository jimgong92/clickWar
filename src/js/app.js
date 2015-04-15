var React = require('react');
var Router = require('react-router');

/**
 * Components
 */ 
var Signup = require('./components/SignupView');
var Login = require('./components/LoginView');


React.render(
  <Signup />,
  document.getElementById('app')
);