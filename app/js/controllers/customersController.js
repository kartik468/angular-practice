'use strict';
(function() {
    var CustomersController = function($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            { 'id': 1, 'joined': '2000-12-02', 'name': "Kartik", 'city': "Nanded", 'orderTotal': 1, 'orders': [{ 'id': 1, 'product': 'shoes', 'total': 9.9 }] },
            { 'id': 2, 'joined': '2001-12-02', 'name': "Sam", 'city': "Kinwat", 'orderTotal': 3, 'orders': [{ 'id': 1, 'product': 'shoes', 'total': 9.9 }] },
            { 'id': 3, 'joined': '2002-12-02', 'name': "Rohan", 'city': "Palghar", 'orderTotal': 11, 'orders': [{ 'id': 1, 'product': 'shoes', 'total': 9.9 }] },
            { 'id': 4, 'joined': '2003-12-02', 'name': "Hitesh", 'city': "Palghar", 'orderTotal': 12, 'orders': [{ 'id': 1, 'product': 'shoes', 'total': 9.9 }] }
        ];

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    };

    CustomersController.$inject = ['$scope'];

    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());
