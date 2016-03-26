(function() {
	'use strict';
    var app = angular.module('customersApp', ['ngRoute']);


    app.config(function($routeProvider){
    	$routeProvider
    	.when('/',{
    		controller:'CustomersController',
    		templateUrl:'js/views/customers.html'
    	})
    	.when('/orders/:customerId',{
    		controller:'OrdersController',
    		templateUrl:'js/views/orders.html'
    	})
    	.otherwise({
    		redirectTo:'/'
    	});
    });
}());
