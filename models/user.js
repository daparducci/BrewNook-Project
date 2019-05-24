var mongoose = require('mongoose');

var factSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    facts: [factSchema],
    googleId: String
  }, {
    timestamps: true   
});

module.exports = mongoose.model('User', userSchema);


