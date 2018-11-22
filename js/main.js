jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });


    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('a[href^="#"], a.navbar-brand, a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });


    /*----------------------------
        MOBILE & DROPDOWN MENU
    ------------------------------*/
    jQuery('.stellarnav').stellarNav({
        theme: 'dark'
    });

    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function () {
        var totalHeight = $(window).scrollTop();
        if (totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }
    });


    /*--------------------------
       HOME PARALLAX BACKGROUND
    ----------------------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });


    /*---------------------------
        HOME SLIDER
    -----------------------------*/
    var $homeSlider = $('.welcome-slider-area');
    $homeSlider.owlCarousel({
        merge: true,
        smartSpeed: 2000,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 6000,
        margin: 0,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();


}(jQuery));



jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);

});
