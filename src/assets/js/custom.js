/**
 * custom.js
 */

// Tabs
function stag_tabs() {	
	'use strict';

	var $tabsw = jQuery('.tabs-wrapper');
	var $tabsli = jQuery('ul.tabs li');
	$tabsw.each(function() {
		jQuery(this).find(".tab-content").hide(); //Hide all content
		jQuery(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
		jQuery(this).find(".tab-content:first").show(); //Show first tab content
	});
	$tabsli.on('click', function(e) {
		jQuery(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active"); //Remove any "active" class
		jQuery(this).addClass("active"); //Add "active" class to selected tab
		jQuery(this).parents('.tabs-wrapper').find(".tab-content").hide(); //Hide all tab content

		var activeTab = jQuery(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		jQuery("li.tab-item:first-child").css("background", "none" );
		jQuery(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content
		e.preventDefault();
	});
	jQuery("ul.tabs li a").on('click', function(e) {
		e.preventDefault();
	})
	jQuery("li.tab-item:last-child").addClass('last-item');
} 

// Toggles
function stag_toggles() {
	'use strict';

	var toggleli = jQuery('#toggle-view li');
	toggleli.on('click', function () {
        var text = jQuery(this).children('div.panel');
        if (text.is(':hidden')) {
            text.slideDown('200');
            jQuery(this).children('span').addClass('toggle-minus');     
            jQuery(this).addClass('activated');     
        } else {
            text.slideUp('200');
			jQuery(this).children('span').removeClass('toggle-minus'); 
            jQuery(this).children('span').addClass('toggle-plus'); 
			jQuery(this).removeClass('activated'); 			
        }
         
    });
}

function stag_interests() {
	// tabs
	var stag_tab = jQuery('ul.dt-tabs li');
	stag_tab.on('click', function () {
		var tab_id = jQuery(this).attr('data-tab');

		jQuery(stag_tab).removeClass('current');
		jQuery('.dt-tab-content').removeClass('current');

		jQuery(this).addClass('current');
		jQuery("#"+tab_id).addClass('current animated fadeInD');
	})	
}


// wow animations
function stag_wowanimations() {
	'use strict';
	if(Modernizr.cssanimations ) {
		var wow = new WOW(
		  {
		    boxClass:     'wow',      // animated element css class (default is wow)
		    animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       false       // trigger animations on mobile devices (true is default)
		  }
		);
		wow.init();
	}	
}

jQuery(document).ready( function() {
	'use strict';

	// function calls
	stag_tabs();
	stag_toggles();
	stag_interests();
	stag_wowanimations();

	//typed text
    jQuery("#typed").typed({
        stringsElement: jQuery('#typed-strings'),
        cursorChar: ".",
        typeSpeed: 100,
        startDelay: 2000,
        backSpeed: 80,
        backDelay: 2000,
        loop: true,
        loopCount: 3
    });	

    jQuery("#text-typed").typed({
        stringsElement: jQuery('#text-typed-strings'),
        cursorChar: "_",
        typeSpeed: 100,
        startDelay: 2000,
        backSpeed: 80,
        backDelay: 2000,
        loop: true,
        loopCount: 3        
    });	    

	
	// Fixed Element Height
	var stag_headerheight = jQuery('#header').outerHeight();
	jQuery('.menu-fixer').css({'height': stag_headerheight});	

	// header margins for elements
    var hswidth = jQuery('#headersocial').width();
    jQuery('.is-header-social .main-navigation.classic-menu').css({'margin-right': hswidth + 40})
    jQuery('.is-header-social .main-navigation.minimal-menu').css({'margin-right': hswidth + 110})


    // header setups
	var open = false;
	jQuery("ul#wrap-navigation > li").each(function(i) {
		jQuery(this).addClass("animated fadeInUp").addClass("fm-item-" + (i+1));
	});

	jQuery("ul#primary-menu > li").each(function(i) {
		jQuery(this).addClass("animated fadeInUp").addClass("fm-item-" + (i+1));
	});	
    jQuery('.bm').on('click', function() {
        jQuery(this).find("#burger-menu").toggleClass("active");
        jQuery(this).find(".burger-icon").toggleClass("active");
        if (open == false) {
            jQuery('.nav-trigger').fadeIn(300);
            jQuery('#header').addClass('is-triggered');
            jQuery('#headersocial').addClass('is-triggered');

            open = true;

            // fullscreen menu open
            jQuery('.overlay').fadeIn(200);
        } else {
            jQuery('.nav-trigger').fadeOut(300);
            jQuery('#header').removeClass('is-triggered');
            jQuery('#headersocial').removeClass('is-triggered');
            open = false;

            // fullscreen menu close
            jQuery('.overlay').fadeOut(200);

        }   
    });  

    jQuery('.wrap-nav a').on('click', function() {
        jQuery('.overlay').fadeOut(400);
        jQuery('#burger-menu, .burger-icon').removeClass('active');
        open = false;
    });	

    
	var fullscreenul = jQuery('.wrap li.menu-item-has-children');
	fullscreenul.on({
	    mouseenter: function() {
	        jQuery(this).children('ul').slideDown(700);
	    },
	    mouseleave: function() {
	        jQuery(this).children('ul').slideUp(700);
	    }
	})	    


	// Magnific Popup
	var stag_lightbox = jQuery(".dt-lightbox");
	stag_lightbox.magnificPopup({

	});

	jQuery(".with-lightbox a").magnificPopup({
		type: 'image'
	});

	var stag_mfpgallery = jQuery('.dt-gallery');
	stag_mfpgallery.each(function() {
	    jQuery(this).find('.dt-lightbox-gallery').magnificPopup({
	    	type: 'image',
	        gallery: {
	          enabled:true,
	          preload: [0,1]
	        }
	    });
	});				

	var stag_del_gallery = jQuery('.dt-gallery-trigger');
	stag_del_gallery.on('click', function () {
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

	var iframe_mfp = jQuery(".iframe-video");
	iframe_mfp.magnificPopup({
		type: 'iframe',
		removalDelay: 300
	});

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


	// smoothscroll effect for custom links
	var stag_smoothscrollbtn = jQuery('.smooth-scroll, .smooth-scroll a');
	stag_smoothscrollbtn.on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = jQuery(this.hash);
		  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		    jQuery('html,body').animate({
		      scrollTop: target.offset().top
		    }, 900);
		    return false;
		  }
		}
	});	


	// tooltips for slider hexagons
	jQuery('.dt-hexagon').tipsy({
		gravity: 's',
		fade: true,
		delayIn: 100, 
		title: 'title',
		offset: 34
	})


	// Video in Posts
	var postvideo = jQuery(".post-video");
	postvideo.fitVids();		


	// page title height for flexbox
	var pagetitleheight = jQuery('.page-title-wrapper .container').height();
	jQuery('.page-title-wrapper .flexbase').css({'height': pagetitleheight});	 


	// to top btn
	var stag_offset = 500,
	$back_to_top = jQuery('.upbtn');
	jQuery(window).scroll(function(){
		( jQuery(this).scrollTop() > stag_offset ) ? $back_to_top.addClass('dt-is-visible') : $back_to_top.removeClass('dt-is-visible');
	});	
	$back_to_top.on('click', function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 700);
        return false;
    });			


	//sticky support
	jQuery('.stag-is-sticky').hcSticky({
		top: 150,
  		bottomEnd: 100
	});		


	// Portfolio Nav vertical positioning
	var projnavheight = jQuery(".projnav").outerHeight();
	jQuery(".projnav").css({'height': projnavheight});	


	// social sharing blocks	
	jQuery('.share-options a').on('click',function(e) {
		e.preventDefault();
	});

	//ajax contact form
	jQuery('#cform').submit(function(){

		var action = jQuery(this).attr('action');

		jQuery("#message").slideUp(750,function() {
		jQuery('#message').hide();

 		jQuery('#submit')
			.after('<div class="la-ball-spin-clockwise la-sm contact-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>')
			.attr("disabled", 'disabled');

		jQuery.post(action, {
			name: jQuery('#name').val(),
			email: jQuery('#email').val(),
			subject: jQuery('#subject').val(),
			comments: jQuery('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				jQuery('#message').slideDown('slow');
				jQuery('#cform .contact-loader').fadeOut('slow',function(){jQuery(this).remove()});
				jQuery('#submit').removeAttr('disabled');
				if(data.match('success') != null) jQuery('#cform').slideUp('slow');
			}
		);

		});
		return false;
	});	

});


jQuery(window).load(function() {
	'use strict';

	// lazy load
	jQuery('.lazy').lazyload({
		threshold : 800,
		effect: 'fadeIn'
	});		
});


//parallax effect for portfolio layout
jQuery(window).scroll(function(e){
	'use strict';

  	var scrolled = jQuery(window).scrollTop();
  	jQuery('.portfolio.portfolio-layout-parallax li').each(function() {
  	var $this = jQuery(this),
  		ptop = $this.find('.dt-awesome-project').offset().top;

  		if(($this).hasClass('item-wide')) { 
  			$this.find('.dt-awesome-project').css('top',((ptop-scrolled)*0.2 + 180)+'px');
  		}
  		else if(($this).hasClass('item-small')) { 
  			$this.find('.dt-awesome-project').css('top',((ptop-scrolled)*0.3 + 50)+'px');
  		}
	});
});

// social sharing block

// Twitter
function twitterSharer(){
	'use strict';
	window.open( 'http://twitter.com/intent/tweet?text='+jQuery("h1.entry-title").text() +' '+window.location, 
		"twitterWindow", 
		"width=650,height=350" );
	return false;
}

// Facebook

function facebookSharer(){
	'use strict';
	window.open( 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
		'facebookWindow', 
		'width=650,height=350');
	return false;
}		

// Pinterest

function pinterestSharer(){
	'use strict';
	window.open( 'http://pinterest.com/pin/create/bookmarklet/?media='+ jQuery('.post img').first().attr('src') + '&description='+jQuery('h1.entry-title').text()+' '+encodeURIComponent(location.href), 
		'pinterestWindow', 
		'width=750,height=430, resizable=1');
	return false;
}	


// Google Plus

function googleSharer(){
	'use strict';
	window.open( 'https://plus.google.com/share?url='+encodeURIComponent(location.href), 
		'googleWindow', 
		'width=500,height=500');
	return false;
}	


// Delicious

function deliciousSharer(){
	'use strict';
	window.open( 'http://delicious.com/save?url='+encodeURIComponent(location.href)+'?title='+jQuery("h1.entry-title").text(), 
		'deliciousWindow', 
		'width=550,height=550, resizable=1');
	return false;
}

// Linkedin

function linkedinSharer(){
	'use strict';
	window.open( 'http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(location.href)+'&title='+jQuery("h1.entry-title").text(), 
		'linkedinWindow', 
		'width=650,height=450, resizable=1');
	return false;
}