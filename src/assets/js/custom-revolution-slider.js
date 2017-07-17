
  // Homepage Revolution Slider
  var tpj = jQuery;
  var stag_slider;

  tpj(document).ready(function() {
      if (tpj("#stag_rev_slider").revolution == undefined) {
          revslider_showDoubleJqueryError("#stag_rev_slider");
      } else {
          stag_slider = tpj("#stag_rev_slider").show().revolution({
              sliderType: "standard",
              sliderLayout: "fullscreen",
              dottedOverlay: "none",
              delay: 9000,
              navigation: {
                  keyboardNavigation: "off",
                  keyboard_direction: "horizontal",
                  mouseScrollNavigation: "off",
                  mouseScrollReverse: "default",
                  onHoverStop: "on",
                  touch: {
                      touchenabled: "on",
                      swipe_threshold: 75,
                      swipe_min_touches: 50,
                      swipe_direction: "horizontal",
                      drag_block_vertical: false
                  },
                  arrows: {
                      style: "custom",
                      enable: true,
                      hide_onmobile: false,
                      hide_onleave: false,
                      tmp: '',
                      left: {
                          h_align: "right",
                          v_align: "center",
                          h_offset: 32,
                          v_offset: -50
                      },
                      right: {
                          h_align: "right",
                          v_align: "center",
                          h_offset: 32,
                          v_offset: 55
                      }
                  },
                  bullets: {
                      enable: true,
                      hide_onmobile: false,
                      style: "custom",
                      hide_onleave: false,
                      direction: "vertical",
                      h_align: "right",
                      v_align: "center",
                      h_offset: 46,
                      v_offset: 0,
                      space: 6,
                      tmp: ''
                  }
              },
              responsiveLevels: [1240, 1024, 778, 480],
              visibilityLevels: [1240, 1024, 778, 480],
              gridwidth: [1240, 1024, 778, 480],
              gridheight: [800, 768, 600, 720],
              lazyType: "smart",
              parallax: {
                  type: "mouse",
                  origo: "enterpoint",
                  speed: 400,
                  levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                  type: "mouse",
              },
              shadow: 0,
              spinner: "spinner2",
              stopLoop: "off",
              stopAfterLoops: -1,
              stopAtSlide: -1,
              shuffle: "off",
              autoHeight: "on",
              fullScreenAutoWidth: "off",
              fullScreenAlignForce: "off",
              fullScreenOffsetContainer: ".menu-fixer",
              fullScreenOffset: "",
              disableProgressBar: "on",
              hideThumbsOnMobile: "off",
              hideSliderAtLimit: 0,
              hideCaptionAtLimit: 0,
              hideAllCaptionAtLilmit: 0,
              debugMode: false,
              fallbacks: {
                  simplifyAll: "off",
                  nextSlideOnWindowFocus: "off",
                  disableFocusListener: false,
              }
          });
      }
  }); /*ready*/


  // Stag Fullscreen Intro

    var stag_intro;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_fullscreen_intro").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_fullscreen_intro");
        } else {
            stag_intro = tpj("#rev_slider_fullscreen_intro").show().revolution({
                sliderType: "standard",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    onHoverStop: "off",
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [868, 768, 960, 720],
                lazyType: "none",
                shadow: 0,
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    }); /*ready*/