'use strict';

angular.module('fedinterviewApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('angular', {
                url: '/angular',
                templateUrl: 'components/Questions/question.view.html',
                controller: function ($scope, questions) {
                    $scope.topic = "Angular JS";
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
                        return Questions.perTopic.query({topic: "angular"})
                    }
                }
            });
    });
