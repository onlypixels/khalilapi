'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PassportSchema = new Schema({
  country_code: {
    type: String
  },
  countryName: {
  	type: String
  },
  VAlidUntil:{
  	type: Number
  },
  IsNotUnUnExpired:{
  	type: Number
  }
});

module.exports = mongoose.model('Passport', PassportSchema);