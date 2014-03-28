'use strict';

angular.module('lastfmDashApp')
  .factory('AjaxCall', function ($http) {
    return {
      get: function(url, params) {
        return $http.get(url, {
          params: params
        });
      }
    };
  });
