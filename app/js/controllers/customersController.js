'use strict';
(function() {
    var CustomersController = function($scope, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.appSettings = appSettings;

        $scope.customers = [];

        function init(){
            $scope.customers = customersFactory.getCustomers();
        }
        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

    };

    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());
