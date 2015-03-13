'use strict';

angular.module('fedinterviewApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('vanilaJS', {
                url: '/vanilaJS',
                templateUrl: 'components/Questions/question.view.html',
                controller: function ($scope, questions) {
                    $scope.topic = "Vanilla JS";
                    $scope.search = "";
                    $scope.questions = questions;
                    $scope.isCollapsedAll = true;
                    $scope.collapseAll = function () {
                        $scope.isCollapsedAll = !$scope.isCollapsedAll;
                        $scope.$broadcast('collapseAll', {status: $scope.isCollapsedAll});
                    }
                },
                resolve: {
                    questions: function (Questions) {
                        return Questions.perTopic.query({topic: "vanillajs"})
                    }
                }
            });
    });
