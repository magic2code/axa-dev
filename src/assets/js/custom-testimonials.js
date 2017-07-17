// Testimonials Slider
jQuery(window).load(function() {	
	'use strict';
	jQuery('.testimonials-slider[id^="owl-testimonials"]').each( function() { 	

		var $div = jQuery(this);


		jQuery("#owl-testimonials").owlCarousel({
			autoHeight : true,
			items : 1,
			nav: false,
			navText: [
				  "<i class='fa fa-angle-left'></i>",
				  "<i class='fa fa-angle-right'></i>"
				  ],				
			rewind: true,
			rtl: false,
			autoplay: false,
			autoplayTimeout: 5000,			
			autoplayHoverPause: true,
			smartSpeed: 800,
			dots: true
		});		

	});
});