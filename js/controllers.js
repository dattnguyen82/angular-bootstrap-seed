'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
   .controller('view1Controller', function ($scope, user, app_cache, nr_services, nr_util, nr_appetite_util) {
      $scope.controller_text = "View 1 Controller Text";
    });
