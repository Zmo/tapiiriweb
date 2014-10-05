'use strict';

angular.module('tapiiriwebApp')
  .controller('EventsCtrl', function($scope, $http) {

    $scope.initEvents = function() {
      $http.get('/api/events').success(function(events) {
        $scope.events = events;
      });
    };

    $scope.addEvent = function() {
      $http.post('/api/events', $scope.newEvent);
      $scope.newEvent = {};
    };

    $scope.initEvents();
  });