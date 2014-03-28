'use strict';

angular.module('lastfmDashApp')
  .directive('trackGrid', function () {
    return {
      templateUrl: 'views/trackgrid.html',
      restrict: 'A',
      controller: function($scope, $element, $attrs, AjaxCall, $timeout){  
      
        $scope.getData = function(){  
          AjaxCall.get('query.php', {
            method: 'user.getrecenttracks',
            user: 'crimsonc',
            limit: 24,
            format: 'json'            
          }).then(function(response){     
          console.log(response);
            $scope.data = response.data.recenttracks;
            
             for (var i = 0; i < $scope.data.track.length; i +=1){
          
              var artist = $scope.data.track[i].artist['#text'],
                  track = $scope.data.track[i].name,
                  query = artist + " - " + track;
                  $scope.data.track[i].spotify = query;
             }  
            
          });
         
        }
        
        
        
        // Interval function to call data ever x minutes
        $scope.intervalFunction = function(){
          $timeout(function() {
            $scope.getData();
            $scope.intervalFunction();
          }, 120000)
        };
        
        $scope.getData();
        // Call data on first load
        
        // Kick off the interval
        $scope.intervalFunction();
        
      },
      link: function postLink(scope, element, attrs) {
      
      }
    };
  });
