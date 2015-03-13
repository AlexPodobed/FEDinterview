'use strict';

angular.module('fedinterviewApp')
    .directive('questionWrapper', function () {
        return {
            restrict: "E",
            templateUrl: "components/Questions/question.directive.html",
            scope: {
                question: "=",
                collapsed: "@",
                name: "@"
            },
            controller: function ($scope) {
                $scope.isCollapsed = $scope.collapsed === 'true';
                $scope.index = $scope.$parent.$index;

                $scope.toggle = function () {
                    $scope.isCollapsed = !$scope.isCollapsed;
                };
                $scope.$on('collapseAll', function (_, data) {
                    $scope.isCollapsed = data.status;
                });
            },
            link: function (scope, el, attr) {
                var isOpened = false;
                scope.openInOneRow = function(){
                    scope.isCollapsed = isOpened;
                    isOpened = !isOpened;
                    el.parent()
                        .removeClass((isOpened)? 'col-lg-6' : 'col-lg-12')
                        .addClass((isOpened)? 'col-lg-12' : 'col-lg-6');

                };
            }
        }
    });
