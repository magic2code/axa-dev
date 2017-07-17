/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);

jQuery(window).load(function() {
	'use strict';	
	setTimeout(function() {	
		// Parallax Backgrounds
		if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {	
			jQuery('#testimonials').parallax("50%", 0.4);
			jQuery('#get-in-touch').parallax("50%", 0.4);
			jQuery('#hero-banner').parallax("50%", 0.4);
			jQuery('#parallax-quote').parallax("50%", 0.4);
			jQuery('#parallax-quote2').parallax("50%", 0.4);
			jQuery('#fun-facts').parallax("50%", 0.4);
			jQuery('#about-me').parallax("50%", 0.4);
			jQuery('#about-us').parallax("50%", 0.4);
			jQuery('#parallax-test').parallax("50%", 0.4);
			jQuery('#project-kinfolk').parallax("50%", 0.4);
			jQuery('#play-music').parallax("50%", 0.4);
			jQuery('#project-asian').parallax("50%", 0.4);
			jQuery('#project-london').parallax("50%", 0.4);
		}
	}, 1000);
	
	// Parallax Fix for Mobile Devices
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		jQuery('.parallax-section').css({'background-attachment': 'scroll'});
	}
});
