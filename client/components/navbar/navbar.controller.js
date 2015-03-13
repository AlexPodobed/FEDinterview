'use strict';

angular.module('fedinterviewApp')
  .controller('NavbarCtrl', ['$scope', function ($scope) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    }, {
      'title': 'Angular',
      'state': 'angular'
    }, {
      'title': 'VanillaJS',
      'state': 'vanilaJS'
    }, {
      'title': 'New Question',
      'state': 'newQuestion'
    }];

    $scope.isCollapsed = true;

  }]);
