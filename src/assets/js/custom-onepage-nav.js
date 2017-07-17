function stag_onepage_nav() {
	'use strict';

	jQuery(".dt-onepage-menu-container ul li").css({ "overflow":"visible"});

	jQuery('.dt-onepage-menu-container ul li.external').each(function() {
		jQuery(this).children('a').addClass('external');
		jQuery(this).removeClass('external');
	});


	var navn = jQuery(".onepage #site-navigation");
	jQuery(navn).find('a').on('click', function () {
		if (navn.is(":visible") && navn.hasClass("is-nav-mobile")) {
			jQuery('#burger-menu').trigger('click');
		}
	});		


	jQuery('.dt-onepage-menu-container ul li.initial').addClass('current')

	//Scroll Nav
	jQuery('.dt-onepage-menu-container ul').onePageNav({
		currentClass: 'current',
		filter: ':not(.external)',
		changeHash: false,
		scrollOffset: 0
	});		    		
}

jQuery(window).load(function() {

	stag_onepage_nav();	

});