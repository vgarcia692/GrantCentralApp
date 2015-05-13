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
    when('/addIdea', {
       templateUrl: '/add',
       controller: 'IdeaCtrl'
    }).
    when('/view3', {
      templateUrl: 'partials/Gwg/list',
      controller: 'GwgCtrl'
    }).
    when('/view3/:id', {
      templateUrl: 'partials/Gwg/detail',
      controller: 'GwgDetailCtrl'
    }).
    when('/view4', {
        templateUrl: 'partials/Rfp/list',
        controller: 'RfpCtrl'
    }).
    when('/addRfp', {
          templateUrl: 'partials/Rfp/add',
          controller: 'RfpCtrl'
    }).
    when('/view4/:id', {
          templateUrl: 'partials/Rfp/detail',
          controller: 'RfpDetailCtrl'
    }).
    when('/success', {
          templateUrl: '/success'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
