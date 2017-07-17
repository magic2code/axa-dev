// Portfolio Gallery Slider
jQuery(window).load(function() {	
	'use strict';
	jQuery('.carousel-clients[id^="owl-clients"]').each( function() { 	

		var $div = jQuery(this);

		jQuery("#owl-clients").owlCarousel({
			autoHeight : true,
		    responsive:{
		        0:{
		            items: 2
		        },		        
		        480:{
		            items: 3
		        },
		        768:{
		            items: 4
		        },
		        1024:{
		            items: 5
		        },
		        1280:{
		            items: 5
		        },	
		        1600:{
		            items: 6
		        }			        		        	
		    },
			nav: false,
			rewind: true,
			rtl: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			dots: false,
			smartSpeed: 800			
		});	

		jQuery("#owl-clients-about").owlCarousel({
			autoHeight : true,
		    responsive:{
		        0:{
		            items: 2
		        },		        
		        480:{
		            items: 2
		        },
		        768:{
		            items: 3
		        },
		        1024:{
		            items: 4
		        },
		        1280:{
		            items: 4
		        },	
		        1600:{
		            items: 4
		        }			        		        	
		    },
			nav: false,
			rewind: true,
			rtl: false,
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			dots: true,
			smartSpeed: 800			
		});			

		jQuery("#owl-clients-onepage").owlCarousel({
			autoHeight : true,
		    responsive:{
		        0:{
		            items: 2
		        },		        
		        480:{
		            items: 3
		        },
		        768:{
		            items: 4
		        },
		        1024:{
		            items: 6
		        },
		        1280:{
		            items: 3
		        },	
		        1600:{
		            items: 3
		        }			        		        	
		    },
			nav: false,
			rewind: true,
			rtl: false,
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			dots: true,
			smartSpeed: 800			
		});	


	});

	var clientitemanchor = jQuery('.client-item a[href="#"]');
	clientitemanchor.on('click', function(e) {
	  	e.preventDefault();
	  });

});