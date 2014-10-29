certControllers.controller('CertListController', ['$scope', 'Cert',
    function($scope, Cert) {
        $scope.phones = Cert.query();
        $scope.orderProp = 'age';
    }]);