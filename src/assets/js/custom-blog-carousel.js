// Blog Carousel
jQuery(window).load(function() {	
	'use strict';
	jQuery('.dt-blog-carousel[id^="owl-blog-carousel"]').each( function() { 	

		jQuery("#owl-blog-carousel").owlCarousel({
			autoHeight : true,				
			rewind: true,
			nav: false,
		    responsive:{
		        0:{
		            items:1,
		        },
		        640:{
		            items:2,
		        },
		        1024:{
		            items:3,
		        }
		    },				
			margin: 30,
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,			
			rtl: false,
			dots: true,
			smartSpeed: 800
		});		

	});
});
