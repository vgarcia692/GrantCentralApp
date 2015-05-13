'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
    //=====================IDEAS=============================

    .controller('IdeaCtrl', ['$scope', 'Ideas', '$location', function ($scope, Ideas, $location) {
        // Create the options for SubSector Multiple Select
        $scope.options = [
            { name: "Agriculture", value: "1" },
            { name: "Aquaculture", value: "2" },
            { name: "Dev. Ed", value: "3" },
            { name: "Finance", value: "4" },
            { name: "Health", value: "5" },
            { name: "STEM", value: "6" },
            { name: "Student Services", value: "7" }
        ];

        // Parse to Integer function to be used for the SubSector Multiple Select
        $scope.parseInt = function(number){
            return parseInt(number, 10);
        };


        // Get All Ideas
        $scope.ideas = Ideas.query();

        // Create a New Idea
        $scope.save = function(){
            if(!$scope.newIdea || $scope.newIdea.length < 1) return;

            var newIdea = new Ideas({
                title: $scope.newIdea.title,
                approved: false,
                department: $scope.newIdea.department,
                sector: $scope.newIdea.sector,
                subSector: $scope.newIdea.subSector,
                idea: $scope.newIdea.idea,
                outcomes: $scope.newIdea.outcomes,
                projectDesc: $scope.newIdea.projectDesc,
                estimatedBudget: $scope.newIdea.estimatedBudget,
                evaluation: $scope.newIdea.evaluation
            });

            newIdea.$save(function(dbidea){
                $scope.ideas.push(dbidea); // get idea from db response
                $location.url('/success');
            });
        }
    }])

    // TODO wire up update function for Idea
    // TODO wire up add to GWG function
    .controller('IdeaDetailCtrl', ['$scope', '$routeParams', 'Ideas', 'Gwgs', '$location', function ($scope, $routeParams, Ideas, Gwgs, $location) {

        // Get Individual idea
        $scope.idea = Ideas.get({ id: $routeParams.id }, function(dbIdea) {

            /**Pull out the SubSectors(CrossCutting) so that
             * we can use ng-repeat to loop through each
             * sector within the array
            **/
            $scope.subSectors = dbIdea.SubSectors;
        });



        // approve and pass to GWG
        $scope.approve = function() {

            var newGrant = new Gwgs({
                IdeaId: $scope.idea.id,
                title: $scope.idea.title
            });

            newGrant.$save(function() {
                console.log('saved');
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

    .controller('GwgDetailCtrl', ['$scope', '$routeParams', 'Gwgs', function ($scope, $routeParams, Gwgs) {

        $scope.gwg = Gwgs.get({ id: $routeParams.id }, function(dbGwg) {

            $scope.save = function() {
                if(!$scope.gwg) return;

                dbGwg.projectDirector = $scope.gwg.projectDirector;
                dbGwg.stratPlan = $scope.gwg.stratPlan;
                dbGwg.govCounterpart = $scope.gwg.govCounterpart;
                dbGwg.vp = $scope.gwg.vp;
                dbGwg.dean = $scope.gwg.dean;
                dbGwg.coreIdea = $scope.gwg.coreIdea;
                dbGwg.goalsAndObj = $scope.gwg.goalsAndObj;
                dbGwg.supportingEvi = $scope.gwg.supportingEvi;
                dbGwg.projectDesc = $scope.gwg.projectDesc;
                dbGwg.estBudget = $scope.gwg.estBudget;
                dbGwg.evaluation = $scope.gwg.evaluation;

                dbGwg.$update();
                alert('Grant Updated.');
            };

        });

    }])

    //=====================GRANT WORKING GROUP=============================
    .controller('RfpCtrl', ['$scope', 'Rfps', '$location', function ($scope, Rfps, $location) {

        // Get All RFP
        $scope.rfps = Rfps.query();

        // Create new RFP
        $scope.save = function(){
            if(!$scope.newRfp) return;

            var newRfp = new Rfps({
                approved: false,
                fundingAgency: $scope.newRfp.fundingAgency,
                agencyProgram: $scope.newRfp.agencyProgram,
                dueDate: $scope.newRfp.dueDate,
                actualFundsAvailable: $scope.newRfp.actualFundsAvailable,
                aveAward: $scope.newRfp.aveAward,
                numOfAwards: $scope.newRfp.numOfAwards,
                grantPeriodBegin: $scope.newRfp.grantPeriodBegin,
                grantPeriodEnd: $scope.newRfp.grantPeriodEnd,
                awardNotification: $scope.newRfp.awardNotification,
                inKind: $scope.newRfp.inKind,
                deptUnit: $scope.newRfp.deptUnit,
                programOfficer: $scope.newRfp.programOfficer,
                commPartner: $scope.newRfp.commPartner,
                rfpSummary: $scope.newRfp.rfpSummary,
                eligibilityInfo: $scope.newRfp.eligibilityInfo,
                appContents: $scope.newRfp.appContents,
                competitivePosition: $scope.newRfp.competitivePosition,
                fundingHistory: $scope.newRfp.fundingHistory,
                proposalDeveloped: $scope.newRfp.proposalDeveloped,
                govCounterpart: $scope.newRfp.govCounterpart
            });

            newRfp.$save(function(dbrfp){
                $scope.rfps.push(dbrfp);
                $location.url('/view4');
            });
        }

    }])

    .controller('RfpDetailCtrl', ['$scope', '$routeParams', 'Rfps', function ($scope, $routeParams, Rfps) {

        $scope.rfp = Rfps.get({ id: $routeParams.id }, function(dbrfp){

              // TODO will need to figure out if there should be a new table for gwg rfps since fields are different
//            // approve and pass to GWG
//            $scope.approve = function() {
//
//                var newGrant = new Rfps({
//                    Rfpid: $scope.idea.id,
//                });
//
//                newGrant.$save(function() {
//                    console.log('saved');
//                    $scope.idea.approved = true;
//
//                    Ideas.update({id: $scope.idea.id}, $scope.idea, function() {
//                        $location.url('/view2');
//                        alert($scope.idea.title + ' Has been moved to Grant Working Group for Deliberation.');
//                    });
//                });
//            }
        });


    }])


