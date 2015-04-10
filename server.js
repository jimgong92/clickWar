/**
 * MODULE DEPENDENCIES
 */
var express = require('express');
/**
 * Start express server
 */
var app = express();
/**
 * Pass server to index
 */
require('./server/index')(app);

app.use(express.static(__dirname + '/dist'));
app.set("port", process.env.PORT || 1337);
app.listen(app.get("port"), function(){
  console.log("Listening on port %d", app.get("port"));
});