jQuery(document).ready( function() {
	'use strict';	
	var $gallery_grid = jQuery('.project-gallery').imagesLoaded().done( function() {
		$gallery_grid.isotope({
			masonry: {
			  columnWidth: 'li'
			},
			itemSelector: 'li',
			percentPosition: true
		});	
	});		

});