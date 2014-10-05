'use strict';

angular.module('tapiiriwebApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/powerlifting', {
        templateUrl: 'app/powerlifting/powerlifting.html',
        controller: 'PowerliftingCtrl'
      });
  });
