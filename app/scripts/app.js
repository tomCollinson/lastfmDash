'use strict';

angular.module('lastfmDashApp', ['ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
  }
]);
