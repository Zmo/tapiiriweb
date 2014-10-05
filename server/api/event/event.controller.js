'use strict';

var _ = require('lodash');
var Event = require('./event.model');

exports.index = function(req, res) {
  Event.find(function(err, events) {
    if(err) { return handleError(res, err); }
    return res.json(200, events);
  })
};

exports.show = function(req, res) {
  Event.findById(req.params.id, function(err, event) {
    if(err) { return handleError(res, err); }
    return res.json(event);
  });
};

exports.create = function(req, res) {
  Event.create(req.body, function(err, event) {
    if(err) { return handleError(res, err); }
    return res.json(201, event);
  });
};

exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Event.findById(req.params.id, function(err, event) {
    if(err) { return handleError(res, err); }
    if(!event) { return res.send(404); }
    var updated = _.merge(event, req.body);
    updated.save(function(err) {
      if(err) { return handleError(res, err); }
      return res.json(200, event);
    });
  });
};

exports.destroy = function(req, res) {
  Event.findById(req.params.id, function(err, event) {
    if(err) { return handleError(res, err); }
    if(!event) { return res.send(404); }
    event.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleErrors(res, err) {
  return res.send(500, err);
}