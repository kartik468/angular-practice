'use strict';
(function() {
    var OrdersController = function($scope, $routeParams, customersFactory) {
        var customerId = parseInt($routeParams.customerId);
        $scope.customer = null;

        function init() {
            // $scope.customer = customersFactory.getCustomer(customerId);
            customersFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    // handle error
                });
        }
        init();
    };

    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];
    angular.module('customersApp')
        .controller('OrdersController', OrdersController);
}());
