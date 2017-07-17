    
    // About Me page header behavior

    var stag_header_logo_about_me = jQuery(".about-me #header .logo img");
    var stag_schemes_about_me = jQuery(".about-me .main-navigation, #headersocial, .bm");
    jQuery(window).scroll( function() {
        var stag_val = jQuery(this).scrollTop();
        if ( stag_val > 150 )  {
            stag_header_logo_about_me.attr("src","assets/images/logo.svg");
            stag_schemes_about_me.removeClass('dark-header').addClass('light-header');
        }
        else {
            stag_header_logo_about_me.attr("src","assets/images/logo-white.svg");
            stag_schemes_about_me.removeClass('light-header').addClass('dark-header');
        }
    });



    var stag_header_logo_fullscreen_intro = jQuery(".fullscreen-intro #header .logo img");
    var stag_schemes_fullscreen_intro = jQuery(".fullscreen-intro .main-navigation, #headersocial, .bm");
    jQuery(window).scroll( function() {
        var stag_val = jQuery(this).scrollTop();
        if ( stag_val > 150 )  {
            stag_header_logo_fullscreen_intro.attr("src","assets/images/logo.svg");
            stag_schemes_fullscreen_intro.removeClass('dark-header').addClass('light-header');
        }
        else {
            stag_header_logo_fullscreen_intro.attr("src","assets/images/logo-white.svg");
            stag_schemes_fullscreen_intro.removeClass('light-header').addClass('dark-header');
        }
    });    