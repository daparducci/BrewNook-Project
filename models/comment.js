var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    content: String,
    rating: {
      type: Number,
      min: 0,
      max: 5
    
    //  user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Member'
    },
    nook: {type: mongoose.Schema.Types.ObjectId, ref: 'Nook'}
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Comment', CommentSchema);