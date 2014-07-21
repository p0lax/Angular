var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {debugger
        $http.get('phones.json').success(function(data) {
            $scope.phones = data;
        });
        $scope.orderProp = 'age';
    }]);