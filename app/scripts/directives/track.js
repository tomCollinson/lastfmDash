'use strict';

angular.module('lastfmDashApp')
  .directive('track', function () {
    return {

      restrict: 'A',
      controller: function ($scope, AjaxCall){
      
        // onClick of track this funciton is fired to find a spotify URL
          $scope.getSpotifyData = function(trackName) {
          
            var spotifyUrl,
                n;
            
              AjaxCall.get('http://ws.spotify.com/search/1/track.json', {
                q : trackName,
              }).then(function(response){ 
              
                spotifyUrl = 'none';
              
                if (response.data.tracks[0] !== undefined) {
             
                  spotifyUrl = response.data.tracks[0].href;
                  n = spotifyUrl.lastIndexOf(':');
                  spotifyUrl = 'http://open.spotify.com/track/' + spotifyUrl.substring(n+1);
                  
                  
                 } else {
                 
                    spotifyUrl = 'none';
                    
                 }
          
                $scope.spotifyUrl = spotifyUrl;
                
              });       
            
          }
      },
      link: function postLink(scope, element, attrs) {
        
        $(window).on('resize', function(){
          lastfmDash.resize();
        });
    };
  });
