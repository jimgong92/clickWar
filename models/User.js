var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    salt: String,
    hash: String
});

module.exports = mongoose.model('User', UserSchema);