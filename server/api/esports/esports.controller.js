'use strict';

var _ = require('lodash');
var Esports = require('./esports.model');

// Get list of esportss
exports.index = function(req, res) {
  Esports.find(function (err, esportss) {
    if(err) { return handleError(res, err); }
    return res.json(200, esportss);
  });
};

// Get a single esports
exports.show = function(req, res) {
  Esports.findById(req.params.id, function (err, esports) {
    if(err) { return handleError(res, err); }
    if(!esports) { return res.send(404); }
    return res.json(esports);
  });
};

// Creates a new esports in the DB.
exports.create = function(req, res) {
  Esports.create(req.body, function(err, esports) {
    if(err) { return handleError(res, err); }
    return res.json(201, esports);
  });
};

// Updates an existing esports in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Esports.findById(req.params.id, function (err, esports) {
    if (err) { return handleError(res, err); }
    if(!esports) { return res.send(404); }
    var updated = _.merge(esports, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, esports);
    });
  });
};

// Deletes a esports from the DB.
exports.destroy = function(req, res) {
  Esports.findById(req.params.id, function (err, esports) {
    if(err) { return handleError(res, err); }
    if(!esports) { return res.send(404); }
    esports.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}