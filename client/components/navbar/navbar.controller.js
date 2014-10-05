'use strict';

angular.module('tapiiriwebApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.items = [
      {
        'title': 'HOME',
        'link': '/'
      },
      {
        'title': 'E-SPORTS',
        'link': '/esports'
      },
      {
        'title': 'EVENTS',
        'link': '/events'
      },
      {
        'title': 'POWERLIFTING',
        'link': '/powerlifting'
      },
      {
        'title': 'SOFTWARE',
        'link': '/software'
      }
    ];

    $scope.isActive = function(link) {
      return $location.path().substr(0, link.length) === link;
    };

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });