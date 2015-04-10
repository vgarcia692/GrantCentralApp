'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
//    .controller('AppCtrl', function ($scope, $http) {
//
//    $http({
//      method: 'GET',
//      url: '/api/name'
//    }).
//    success(function (data, status, headers, config) {
//      $scope.name = data.name;
//    }).
//    error(function (data, status, headers, config) {
//      $scope.name = 'Error!';
//    });
//
//  })
    .controller('IdeaCtrl', ['$scope', 'Ideas', function ($scope, Ideas) {
        $scope.ideas = Ideas.query();

        // New Idea
        $scope.save = function(){
            if(!$scope.newIdea || $scope.newIdea.length < 1) return;
            var idea = new Ideas({
                title: $scope.newIdea.title,
                beneficiary: $scope.newIdea.beneficiary,
                amount: $scope.newIdea.amount
            });

            idea.$save(function(dbidea){
                $scope.ideas.push(dbidea); // get idea from db response
                $scope.newIdea = ''; // clear inputs
            });
        }
    }])

    .controller('IdeaDetailCtrl', ['$scope', '$routeParams', 'Ideas', '$location', function ($scope, $routeParams, Ideas, $location) {

        $scope.idea = Ideas.get({ id: $routeParams.id });

    }])

    .controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  })
    .controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
