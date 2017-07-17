jQuery(document).ready(function() {
	'use strict';
	// Header Effect on Scroll

	var initial_header_color = '#fff',
		fallback_header_color = '#fff',
		onscroll_header_color = 'rgba(255, 255, 255, 0.8)',
		initial_padding_top = '48px',
		initial_padding_bottom = '48px',
		onscroll_padding_top = '16px',
		onscroll_padding_bottom = '16px',
		logo_width = '85px',
		logo_height = '25px',
		logo_onscroll_height = '25px';

	var header_logo = jQuery("#header .logo img");

		jQuery(window).scroll( function() {
			var value = jQuery(this).scrollTop();
			if ( value > 150 )	{

					jQuery("#header").removeClass("initial-state").addClass("scrolled-header").css({"padding-top": onscroll_padding_top, "padding-bottom": onscroll_padding_bottom});
					jQuery(".no-rgba .scrolled-header").css({"background": fallback_header_color});
					jQuery(".logo img").css({"height": logo_onscroll_height, "width": "auto"});

					jQuery(".scrolled-header").css({"background": onscroll_header_color});
					jQuery(".scrolled-header .main-navigation ul ul").css({'background': onscroll_header_color});		
			}
			else {
				jQuery("#header").removeClass("scrolled-header").addClass("initial-state");
				jQuery("#header").css({"padding-top": initial_padding_top, "padding-bottom": initial_padding_bottom});
				jQuery(".logo img").css({"height": logo_height, "width": logo_width});
				jQuery(".initial-state").css({'background': initial_header_color});					
			}
		});	
});


jQuery(window).load(function() {
	var headernavheight = jQuery('.site-header .container').height();
	var socialaheight = jQuery('#headersocial li a').height();
	jQuery('.logo-container').css({'height': headernavheight});	 
	jQuery('#headersocial').css({'height': headernavheight});	 
	jQuery('#headersocial li').css({'margin-top': (headernavheight - socialaheight)/2 });		
	jQuery('.header-nav').css({'min-height': headernavheight});		
})