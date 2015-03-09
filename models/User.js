var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: Number,
    username: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);