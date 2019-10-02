'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Game = new Schema({
  gameId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['ongoing', 'completed']
    }],
    default: ['ongoing']
  },
  currentPoints:{
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Games', Game);