'use strict';

describe('Controller: EsportsCtrl', function () {

  // load the controller's module
  beforeEach(module('tapiiriwebApp'));

  var EsportsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EsportsCtrl = $controller('EsportsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
