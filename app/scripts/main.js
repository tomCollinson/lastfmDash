var lastfmDash = (function($){
	/*
		This file contains global methods that may be used througout the application
		but don't belong within controllers or directives, but can be called from them
	*/

	var methods = {};

	methods.init = function (){
		//resize();
	};


	var resize = function () {
		var cols = 1,
			winWidth = $(window).innerWidth();
          
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
        }
	};

})(jQuery);