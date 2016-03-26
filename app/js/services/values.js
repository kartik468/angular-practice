(function() {
    'use strict';
    // cant be accessible in config method
    angular.module('customersApp').value('appSettings', {
        title: "Customers Application",
        version: "1.0"
    });


    // 
    // can be accessible in config method
    // angular.module('customersApp').constant('appSettings', {
    //     title: "Customers Application",
    //     version: "1.0"
    // });

}());
