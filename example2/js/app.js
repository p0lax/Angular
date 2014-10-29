/**
 *
 */

'use strict';

var phonecatApp = angular.module('certApp', [
    'ngRoute',
    'certControllers'
]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/certificates', {
                templateUrl: 'views/cert-list.html',
                controller: 'CertListController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
