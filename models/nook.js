var mongoose = require('mongoose');

var nookSchema = new mongoose.Schema({
    nook: {
      type: String,
      required: true
    },
    coffee: {
      type: String,
      enum: ['Gas Station', 'Instant', 'Starbucks', 'Hipster']
    },
    wifi: {
      type: String,
      enum: ['Yes', 'No'],
      required: true
    },
    space: {
      type: String,
      enum: ['Cramped', 'Cozy', 'Copious'],
      required: true
    },
    outlets: {
      type: String,
      enum: ['Charge Before You Go', 'Bring a Power Strip', 'Outlet Heaven' ],
      required: true
    },
    openHour: {
      type: String
    },
    closeHour: {
      type: String
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
  }, {
    timestamps: true   
});

module.exports = mongoose.model('Nook', nookSchema);



