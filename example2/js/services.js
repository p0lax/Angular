/**
 *  Services
 */

'use strict';

var certServices = angular.module('certServices', ['ngResource']);

certServices.factory('certList', ['$resource',
    function($resource){
        return $resource('phoneId.json', {}, {
            query: {
                method:'GET',
                params: {
                    phoneId:'phones'
                },
                isArray:true
            }
        });
    }]);