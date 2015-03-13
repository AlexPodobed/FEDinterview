'use strict';

angular.module('fedinterviewApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'textAngular',
  'ngToast',
  'gist'
])
  .constant('API_URL', 'api/')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(function($rootScope, $state){
    $rootScope.$on('$stateChangeSuccess', function(ecent, toState, toParams, fromState){
      $state.previous = fromState.name;
    })
  });
