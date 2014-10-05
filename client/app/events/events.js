'use strict';

angular.module('tapiiriwebApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('events', {
        templateUrl: 'app/events/events.html',
        controller: 'EventsCtrl'
      });
  });