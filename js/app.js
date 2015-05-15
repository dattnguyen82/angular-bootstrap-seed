'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'myApp.config'
]).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'index.html', public: true})
        .when('/view1', {templateUrl: 'partials/view1.html', controller: 'view1Controller', public: true})
        .otherwise({redirectTo: '/'});
}]).
run(function($rootScope, $http) {

    });
