'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: String,
  date: Date
});

module.exports = mongoose.model('Event', EventSchema);