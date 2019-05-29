var mongoose = require('mongoose');
// var Comment = require('./comment');


var MemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
  }, {
    timestamps: true   
});

module.exports = mongoose.model('Member', MemberSchema);