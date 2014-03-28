'use strict';

angular.module('lastfmDashApp')

.controller('HeaderCtrl', function($scope, $location, $route, $rootScope, $element) {


  $scope.isActive = function(item) {
    if (item.path === $location.path().substring(9)) {
      $scope.pageTitle = item.title;
      $rootScope.currentSection = item.path;
      return true;
    }
    return false;
  };

});
