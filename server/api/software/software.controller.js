'use strict';

var _ = require('lodash');
var Software = require('./software.model');

// Get list of softwares
exports.index = function(req, res) {
  Software.find(function (err, softwares) {
    if(err) { return handleError(res, err); }
    return res.json(200, softwares);
  });
};

// Get a single software
exports.show = function(req, res) {
  Software.findById(req.params.id, function (err, software) {
    if(err) { return handleError(res, err); }
    if(!software) { return res.send(404); }
    return res.json(software);
  });
};

// Creates a new software in the DB.
exports.create = function(req, res) {
  Software.create(req.body, function(err, software) {
    if(err) { return handleError(res, err); }
    return res.json(201, software);
  });
};

// Updates an existing software in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Software.findById(req.params.id, function (err, software) {
    if (err) { return handleError(res, err); }
    if(!software) { return res.send(404); }
    var updated = _.merge(software, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, software);
    });
  });
};

// Deletes a software from the DB.
exports.destroy = function(req, res) {
  Software.findById(req.params.id, function (err, software) {
    if(err) { return handleError(res, err); }
    if(!software) { return res.send(404); }
    software.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}