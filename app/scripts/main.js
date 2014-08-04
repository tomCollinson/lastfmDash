var lastfmDash = (function($){
	/*
		This file contains global methods that may be used througout the application
		but don't belong within controllers or directives, but can be called from them
	*/

	function resize() {
		var cols = 1,
			winWidth = $(window).innerWidth(),
			element = $('.track');
          
          if (winWidth >= 380 && winWidth < 720) {
            cols = 2;
          }
          else if (winWidth >= 720 && winWidth < 1024){
            cols = 3
          }
          else if (winWidth >= 1024 && winWidth < 1300) {
            cols = 4
          } else if (winWidth >= 1300) {
            cols = 5
          }
          element.css({'height': (winWidth/cols), 'width': (winWidth/cols)});
        };

	function lazyload() {
		/*
			Fires the unveil plugin whenever required
		*/
		$('img').unveil();
	}

	return {
		init: function () {
			resize();
			lazyload();
			
		},
		resizeTrack: resize,
		lazyloading: lazyload
	}

})(jQuery);

$(document).ready(function(){
	lastfmDash.init();
})

/* Any code to happen on window resize should be here, 
   not within directives for performance purposes
*/
$(window).on('resize', function(){
  lastfmDash.resizeTrack();
});