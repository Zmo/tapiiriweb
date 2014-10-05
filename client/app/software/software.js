'use strict';

angular.module('tapiiriwebApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/software', {
        templateUrl: 'app/software/software.html',
        controller: 'SoftwareCtrl'
      });
  });
