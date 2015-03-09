/**
 * MODULE DEPENDENCIES
 */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/**
 * MongoDB connection
 */
mongoose.connect("mongodb://localhost/1338");
mongoose.connection.on("error", function(err) {
  console.error(err);
  console.error("MongoDB Connection Error.");
});


var app = express(); 

/**
 * Express Server Configuration
 */
app.set("port", process.env.PORT || 1337);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client'));

app.listen(app.get("port"), function(){
  console.log("Listening on port %d", app.get("port"));
});