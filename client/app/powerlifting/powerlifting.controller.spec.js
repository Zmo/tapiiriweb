'use strict';

describe('Controller: PowerliftingCtrl', function () {

  // load the controller's module
  beforeEach(module('tapiiriwebApp'));

  var PowerliftingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PowerliftingCtrl = $controller('PowerliftingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
