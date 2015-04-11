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
    //=====================IDEAS=============================

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

    // TODO wire up update function for Idea
    // TODO wire up add to GWG function
    .controller('IdeaDetailCtrl', ['$scope', '$routeParams', 'Ideas', 'Gwgs', '$location', function ($scope, $routeParams, Ideas, Gwgs, $location) {

        $scope.idea = Ideas.get({ id: $routeParams.id });

        // approve and pass to GWG
        $scope.approve = function() {

            var grant = new Gwgs({
                title: $scope.idea.title,
                beneficiary: $scope.idea.beneficiary,
                amount: $scope.idea.amount
            });

            grant.$save(function() {

                $scope.idea.approved = true;

                Ideas.update({id: $scope.idea.id}, $scope.idea, function() {
                    $location.url('/view2');
                    alert($scope.idea.title + ' Has been moved to Grant Working Group for Deliberation.');
                });
            });
        }

    }])

    //=====================GRANT WORKING GROUP=============================

    .controller('GwgCtrl', ['$scope', 'Gwgs', function ($scope, Gwgs) {
        $scope.gwgs = Gwgs.query();
    }])

    // TODO wire up update function for GWG
    .controller('GwgDetailCtrl', ['$scope', '$routeParams', 'Gwgs', '$location', function ($scope, $routeParams, Gwgs, $location) {

        $scope.idea = Gwgs.get({ id: $routeParams.id });

    }])

    .controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
