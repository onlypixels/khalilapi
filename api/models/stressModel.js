'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StressSchema = new Schema({
  stressLevel: {
    type: Number,
    Required: 'Needs a stress level!',
    default: 0
  },
  message: {
    type: String
  }
});


module.exports = mongoose.model('Stress', StressSchema);