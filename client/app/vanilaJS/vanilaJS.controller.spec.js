'use strict';

describe('Controller: VanilaJSCtrl', function () {

  // load the controller's module
  beforeEach(module('fedinterviewApp'));

  var VanilaJSCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VanilaJSCtrl = $controller('VanilaJSCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
