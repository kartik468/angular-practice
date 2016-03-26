'use strict';
(function() {
    var CustomersController = function($scope, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.appSettings = appSettings;

        $scope.customers = [];

        function init() {
            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    // handle error
                });
        }
        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        $scope.deleteCustomer = function(customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function(status) {
                    if (status) {
                        for (var i = 0, len = $scope.customers.length; i < len; i++) {
                            if ($scope.customers[i].id === customerId) {
                                $scope.customers.splice(i, 1);
                                break;
                            }
                        }
                    } else {
                        $window.alert("unable to delete customer...");
                    }
                })
                .error(function(data, status, headers, config) {
                    // error handling..
                });
        };

    };

    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());
