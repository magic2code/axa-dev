jQuery(document).ready( function() {
	'use strict';	
	//minimal blog grid isotope
	jQuery('.grid-content').isotope({
		masonry: {
		  columnWidth: '.grid-item',
		  gutter: '.gutter-sizer'
		},
		itemSelector: '.grid-item',
		percentPosition: true
	});	

});