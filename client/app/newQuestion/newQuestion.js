'use strict';

angular.module('fedinterviewApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newQuestion', {
        url: '/newQuestion/:questionID',
        templateUrl: 'app/newQuestion/newQuestion.html',
        controller: 'NewQuestionCtrl'
      });
  });
