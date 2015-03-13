'use strict';

angular.module('fedinterviewApp')
  .controller('NewQuestionCtrl', ['$scope', 'Questions', '$state', 'ngToast', function ($scope, Questions, $state, ngToast) {
    var emptyQuestionObj = {
        name   : "",
        topic  : "",
        answer : "",
        img    : "",
        code   : ""
    },
        questionId = $state.params.questionID,
        editState = !!questionId.length;

    function defineQuestionModel(){
      $scope.question = (questionId) ? Questions.all.get({questionID: questionId}) : emptyQuestionObj;
    }
    defineQuestionModel();

    $scope.editState = editState;
    $scope.hasPrevState = $state.previous.length > 0;

    $scope.goBack = function(){
      $state.go($state.previous)
    };

    $scope.save = function () {
      Questions.all.save($scope.question, function () {
        defineQuestionModel();
        ngToast.create('<strong>New question successfully created</strong>');
      })
    };

    $scope.update = function(){
      Questions.all.update({questionID: questionId},$scope.question, function(){
        ngToast.create('<strong>New question successfully updated</strong>');
      })
    };

    $scope.cancel = function(){
      defineQuestionModel();
    };

  }]);
