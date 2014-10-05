'use strict';

angular.module('tapiiriwebApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/esports', {
        templateUrl: 'app/esports/esports.html',
        controller: 'EsportsCtrl'
      });
  });
