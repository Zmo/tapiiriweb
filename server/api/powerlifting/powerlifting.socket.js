/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Powerlifting = require('./powerlifting.model');

exports.register = function(socket) {
  Powerlifting.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Powerlifting.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('powerlifting:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('powerlifting:remove', doc);
}