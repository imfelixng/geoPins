const mongoose = require('mongoose');

const PinSchema = mongoose.Schema({
  title: String,
  content: String,
  image: String,
  latitude: Number,
  longitude: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
}, { timestamps: true });

module.exports = mongoose.model('Pin', PinSchema);