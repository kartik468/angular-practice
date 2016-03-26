(function() {
    'use strict';
    var customersFactory = function($http) {
        var customers = [
            { 'id': 1, 'joined': '2000-12-02', 'name': "Kartik", 'city': "Nanded", 'orderTotal': 1, 'orders': [{ 'id': 1, 'product': 'shoes1', 'total': 9.9 }, { 'id': 12, 'product': 'temp', 'total': 9.9 }] },
            { 'id': 2, 'joined': '2001-12-02', 'name': "Sam", 'city': "Kinwat", 'orderTotal': 3, 'orders': [{ 'id': 1, 'product': 'shoes2', 'total': 9.9 }] },
            { 'id': 3, 'joined': '2002-12-02', 'name': "Rohan", 'city': "Palghar", 'orderTotal': 11, 'orders': [{ 'id': 1, 'product': 'shoes3', 'total': 9.9 }, { 'id': 1, 'product': 'banana', 'total': 19.9 }] },
            { 'id': 4, 'joined': '2003-12-02', 'name': "Hitesh", 'city': "Palghar", 'orderTotal': 12, 'orders': [{ 'id': 1, 'product': 'shoes4', 'total': 9.9 }] }
        ];
        var factory = {};
        factory.getCustomers = function() {
            return $http.get('/customers');
        };
        factory.getCustomer = function(id) {
            return $http.get('/customers/' + id);
        };
        return factory;
    };
    customersFactory.$inject = ['$http'];
    angular.module('customersApp')
        .factory('customersFactory', customersFactory);
}());
