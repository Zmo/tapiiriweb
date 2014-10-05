'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PowerliftingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Powerlifting', PowerliftingSchema);