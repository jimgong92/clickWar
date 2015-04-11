var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');
var AuthConstants = require('../constants/AuthConstants');

var CHANGE_EVENT = 'change';

var AuthStore = assign({}, EventEmitter.prototype, {
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
    default: 
      //no op
  }
};

module.exports = AuthStore;