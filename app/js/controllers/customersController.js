'use strict';
(function() {
    var CustomersController = function($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            { 'joined': '2000-12-02', 'name': "Kartik", 'city': "Nanded", 'orderTotal': 1 },
            { 'joined': '2001-12-02', 'name': "Sam", 'city': "Kinwat", 'orderTotal': 3 },
            { 'joined': '2002-12-02', 'name': "Rohan", 'city': "Palghar", 'orderTotal': 11 },
            { 'joined': '2003-12-02', 'name': "Hitesh", 'city': "Palghar", 'orderTotal': 12 }
        ];

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    };
    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());
