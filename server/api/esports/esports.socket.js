/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Esports = require('./esports.model');

exports.register = function(socket) {
  Esports.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Esports.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('esports:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('esports:remove', doc);
}