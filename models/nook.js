var mongoose = require('mongoose');



var nookSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String
  }, {
    timestamps: true   
});

module.exports = mongoose.model('Nook', nookSchema);


