'use strict';
(function() {
    var OrdersController = function($scope, $routeParams, customersFactory) {
        var customerId = parseInt($routeParams.customerId);
        $scope.customer = null;

        function init() {
            $scope.customer = customersFactory.getCustomer(customerId);
        }
        init();
    };

    OrdersController.$inject = ['$scope', '$routeParams','customersFactory'];
    angular.module('customersApp')
        .controller('OrdersController', OrdersController);
}());
