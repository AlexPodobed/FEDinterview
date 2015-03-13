'use strict';

angular.module('fedinterviewApp')
  .factory('Questions',['$resource', 'API_URL', function($resource, API_URL){
    return {
      all: $resource(API_URL + "questions/:questionID", {questionID: "@questionID"}, {'update': {method: "PUT"}}),
      perTopic: $resource(API_URL + "questions/topic/:topic", {topic: "@topic"})
    }
  }]);
