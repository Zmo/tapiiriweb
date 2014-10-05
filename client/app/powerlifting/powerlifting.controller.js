'use strict';

angular.module('tapiiriwebApp')
  .controller('PowerliftingCtrl', function ($scope, $http) {
    $scope.message = 'Hello';

    $scope.initPowerlifts = function() {
      $http.get('/api/powerliftings').success(function(powerlifts) {
        $scope.powerlifts = powerlifts;
      });
    };

    $scope.addPowerlift = function() {
      $http.post('/api/powerliftings', $scope.newPowerlift);
      $scope.powerlifts.push($scope.newPowerlift);
      $scope.newPowerlift = {};
    };

    $scope.initPowerlifts();
  });
