'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EsportsSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Esports', EsportsSchema);