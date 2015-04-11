'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])

    .factory('Ideas', ['$resource', function($resource){
        return $resource('/ideas/:id', null, { // pull url from server
            'update': { method:'PUT' }
        });
    }])

    .factory('Gwgs', ['$resource', function($resource){
        return $resource('/gwgs/:id', null, { // pull url from server
            'update': { method:'PUT' }
        });
    }])
