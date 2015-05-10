'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])

    .factory('Ideas', ['$resource', function($resource){
        return $resource('/api/ideas/:id', null, { // pull url from server
            'update': { method:'PUT' }
        });
    }])

    .factory('Gwgs', ['$resource', function($resource){
        return $resource('/api/gwgs/:id', {id: '@id'}, { // pull url from server
            'update': { method:'PUT' }
        });
    }])

    .factory('Rfps', ['$resource', function($resource){
        return $resource('/api/rfps/:id', {id: '@id'}, {
            'update': {method: 'PUT'}
        });
    }])
