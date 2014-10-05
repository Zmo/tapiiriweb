/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Software = require('./software.model');

exports.register = function(socket) {
  Software.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Software.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('software:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('software:remove', doc);
}