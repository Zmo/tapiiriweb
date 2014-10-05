'use strict';

var _ = require('lodash');
var Powerlifting = require('./powerlifting.model');

// Get list of powerliftings
exports.index = function(req, res) {
  Powerlifting.find(function (err, powerliftings) {
    if(err) { return handleError(res, err); }
    return res.json(200, powerliftings);
  });
};

// Get a single powerlifting
exports.show = function(req, res) {
  Powerlifting.findById(req.params.id, function (err, powerlifting) {
    if(err) { return handleError(res, err); }
    if(!powerlifting) { return res.send(404); }
    return res.json(powerlifting);
  });
};

// Creates a new powerlifting in the DB.
exports.create = function(req, res) {
  Powerlifting.create(req.body, function(err, powerlifting) {
    if(err) { return handleError(res, err); }
    return res.json(201, powerlifting);
  });
};

// Updates an existing powerlifting in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Powerlifting.findById(req.params.id, function (err, powerlifting) {
    if (err) { return handleError(res, err); }
    if(!powerlifting) { return res.send(404); }
    var updated = _.merge(powerlifting, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, powerlifting);
    });
  });
};

// Deletes a powerlifting from the DB.
exports.destroy = function(req, res) {
  Powerlifting.findById(req.params.id, function (err, powerlifting) {
    if(err) { return handleError(res, err); }
    if(!powerlifting) { return res.send(404); }
    powerlifting.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}