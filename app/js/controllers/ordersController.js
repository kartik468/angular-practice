'use strict';
(function() {
    var OrdersController = function($scope, $routeParams) {
        var customerId = parseInt($routeParams.customerId);
        $scope.orders = null;

        function init() {
            for (var i = 0, len = $scope.customers.length; i < len; i++) {
                if ($scope.customers[i].id === customerId) {
                    $scope.orders = $scope.customers[i].orders;
                    break;
                }
            }
        }

        $scope.customers = [
            { 'id': 1, 'joined': '2000-12-02', 'name': "Kartik", 'city': "Nanded", 'orderTotal': 1, 'orders': [{ 'id': 1, 'product': 'shoes1', 'total': 9.9 },{ 'id': 12, 'product': 'temp', 'total': 9.9 }] },
            { 'id': 2, 'joined': '2001-12-02', 'name': "Sam", 'city': "Kinwat", 'orderTotal': 3, 'orders': [{ 'id': 1, 'product': 'shoes2', 'total': 9.9 }] },
            { 'id': 3, 'joined': '2002-12-02', 'name': "Rohan", 'city': "Palghar", 'orderTotal': 11, 'orders': [{ 'id': 1, 'product': 'shoes3', 'total': 9.9 },{ 'id': 1, 'product': 'banana', 'total': 19.9 }] },
            { 'id': 4, 'joined': '2003-12-02', 'name': "Hitesh", 'city': "Palghar", 'orderTotal': 12, 'orders': [{ 'id': 1, 'product': 'shoes4', 'total': 9.9 }] }
        ];

        init();
    };

    OrdersController.$inject = ['$scope', '$routeParams'];
    angular.module('customersApp')
        .controller('OrdersController', OrdersController);
}());
