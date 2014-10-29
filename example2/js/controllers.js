var certControllers = angular.module('certControllers', []);

certControllers.controller('CertListController', ['$scope', 'certList',
    function($scope, certList) {
        $scope.certs = certList.query();
    }]);