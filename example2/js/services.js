/**
 *  Services
 */
'use strict';

var certServices = angular.module('certServices', ['ngResource']);

certServices.factory('certList', ['$resource',
    function($resource){
        return $resource('http://www.mockaroo.com/api/generate.json', {
            key: '6db6a990',
            schema: 'simpleCertList',
            count: 20,
            callback: 'JSON_CALLBACK'
        }, {
            query: {
                method:'JSONP',
                isArray: true
            }
        });
    }]);