// Portfolio Gallery Slider
jQuery(window).load(function() {	
	'use strict';
	jQuery('.portfolio-slider[id^="owl-slider"]').each( function() { 	

		jQuery("#owl-slider-about-us").owlCarousel({
			autoHeight : true,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        640:{
		            items:2,
		            nav:true
		        },
		        1024:{
		            items:3,
		            nav:true
		        }
		    },			
			navText: [
				  "<i class='fa fa-angle-left'></i>",
				  "<i class='fa fa-angle-right'></i>"
				  ],				
			rewind: true,
			rtl: false,
			margin: 6,
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			dots: true,
			smartSpeed: 800		
		});		


		jQuery("#owl-slider-cereal").owlCarousel({
			autoHeight : true,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        640:{
		            items:1,
		            nav:true
		        },
		        1024:{
		            items:1,
		            nav:true
		        }
		    },			
			navText: [
				  "<i class='fa fa-angle-left'></i>",
				  "<i class='fa fa-angle-right'></i>"
				  ],				
			rewind: true,
			rtl: false,
			margin: 0,
			autoplay: true,
			autoplayTimeout: 10000,
			autoplayHoverPause: true,
			dots: true,
			smartSpeed: 800		
		});				

	});
});