'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
  ]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/welcome'
    }).
    when('/view2', {
      templateUrl: 'partials/Idea/list',
      controller: 'IdeaCtrl'
    }).
    when('/view2/:id', {
      templateUrl: 'partials/Idea/detail',
      controller: 'IdeaDetailCtrl'
    }).
    when('/view3', {
      templateUrl: 'partials/Gwg/list',
      controller: 'GwgCtrl'
    }).
    when('/view3/:id', {
      templateUrl: 'partials/Gwg/detail',
      controller: 'GwgDetailCtrl'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
