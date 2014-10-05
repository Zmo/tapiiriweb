'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SoftwareSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Software', SoftwareSchema);