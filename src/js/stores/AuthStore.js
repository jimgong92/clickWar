var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');

var CHANGE_EVENT = 'change';

var AuthStore = assign({}, EventEmitter.prototype, {
  signup: function(email, password){
    $.ajax({
      url: window.location.origin + '/api/signup',
      type: 'POST',
      data: JSON.stringify({
        email: email,
        password: password
      }),
      contentType: 'application/json',
      success: function(data){
        console.log("Successful signup");
        console.log(data);
        var id = data._id;
        this.emitChange();
      }.bind(this),
      error: function(err){
        console.error("Error in signup");
        console.error(err);
      }
    });
  },
  login: function(email, password){
    console.log(email);
    console.log(password);
    $.ajax({
      url: window.location.origin + '/api/login',
      type: 'POST',
      data: JSON.stringify({
        email: email,
        password: password
      }),
      contentType: 'application/json',
      success: function(data){
        console.log("Successful login");
        console.log(data);
        var id = data._id;
        this.emitChange();
      }.bind(this),
      error: function(err){
        console.error("Error in login");
        console.error(err);
      }
    });
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
});

/**
 * Register callback to handle all updates
 */
AppDispatcher.register(function(action){
  switch(action.actionType){
    case AuthConstants.SIGNUP:
      AuthStore.signup(action.email, action.password);
      break;
    case AuthConstants.LOGIN:
      AuthStore.login(action.email, action.password);
      break;
    default: 
      //no op
  }
});

module.exports = AuthStore;