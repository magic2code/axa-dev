function dt_item_on_hover() {
	// Portfolio Grid In and Out Effect //
	var portfoliohover = jQuery('.grid-item a');
	portfoliohover.on({
	    mouseenter: function() {
	       jQuery(this).find('.grid-item-on-hover').animate({ opacity: 1 }, 350);
	    },
	    mouseleave: function() {
	       jQuery(this).find('.grid-item-on-hover').animate({ opacity: 0 }, 350);
	    }
	})	
}

function dt_portfolio_grid_lightboxes() {
	var mfpgallery = jQuery('.mfp-gallery');
	mfpgallery.each(function() {
	    jQuery(this).find('.dt-lightbox-gallery').magnificPopup({
	    	type: 'image',
	        gallery: {
	          enabled:true,
	          preload: [0,1]
	        }
	    });
	});				

	var dtgallery = jQuery('.dt-gallery-trigger');
	jQuery('.dt-gallery-trigger').on('click', function () {
	    jQuery(this).next().magnificPopup('open');
	});

	jQuery('.dt-single-gallery').each(function () {
	    jQuery(this).magnificPopup({
	        delegate: 'a',
	        type: 'image',
	        gallery: {
	            enabled: true,
	            navigateByImgClick: true
	        },
	        fixedContentPos: false
	    });
	});	

}

jQuery(document).ready( function() {
	'use strict';

	dt_item_on_hover();
	dt_portfolio_grid_lightboxes();

	var $grid = jQuery('.grid').imagesLoaded().done( function() {
		$grid.isotope({
			masonry: {
			  columnWidth: '.grid-item.item-small',
			},
			itemSelector: '.grid-item',
			percentPosition: true
		});	
	});	

	// bind filter button click
	jQuery('#filters').on( 'click', 'li a', function() {
		var filterValue = jQuery( this ).attr('data-filter');
		// use filterFn if matches value
		$grid.isotope({ filter: filterValue });
	});
	// change selected class on buttons
	jQuery('.option-set').each( function( i, buttonGroup ) {
		var $buttonGroup = jQuery( buttonGroup );
		$buttonGroup.on( 'click', 'li a', function() {
		  $buttonGroup.find('.selected').removeClass('selected');
		  jQuery( this ).addClass('selected');
		});
	});	

	// show/hide filters button
		var open = false;
		var trigger = jQuery('.cat-trigger');
		if(trigger.hasClass('active')) {
			open = true;
		}
		else {
			jQuery('.filter-active #filter_options').slideUp(400);
		}
	    trigger.on('click', function() {
	        if (open == false) {
	            jQuery('#filter_options').slideDown(400);
	            jQuery(this).removeClass("idle").addClass('active');
	            open = true;
	        } else {
	            jQuery('#filter_options').slideUp(400);
	            jQuery(this).removeClass('active').addClass('idle');
	            open = false;
	        }   
	    });	

});