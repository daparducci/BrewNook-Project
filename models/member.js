var mongoose = require('mongoose');



var MemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String
  }, {
    timestamps: true   
});

module.exports = mongoose.model('Member', MemberSchema);