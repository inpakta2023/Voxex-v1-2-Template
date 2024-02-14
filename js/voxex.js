/*
  [JS Index]
  
  ---
  
  Template Name: Voxex - Photography Portfolio Template
  Author:  ex-nihilo
  Version: 1.2
*/


/*
  1. preloader
  2. fadeIn.element
  3. slick slider
    3.1. slick services slider
	3.2. slick fullscreen slideshow ZOOM/FADE
  4. owl carousel
    4.1. owl testimonials carousel
	4.2. owl works carousel
	4.3. owl news carousel
  5. magnificPopup
    5.1. magnificPopup single
	5.2. magnificPopup gallery
  6. navigation
    6.1. navigation icon
    6.2. navigation panels
    6.3. navigation links
    6.4. navigation active state
    6.5. navigation hover state
  7. fullPage
  8. YouTube player
  9. toggle panels
  10. forms
    10.1. contact form
  11. clone function
    11.1. horizontal lines
  12. social icons launcher
    12.1. social icons launcher additional CLOSER
  13. skills bar
  14. facts counter
  15. swiper slider
    15.1. swiper thumbnail slider horizontal thumbs
  16. google maps zoom ON/OFF
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
    });
	
    // 3. slick slider
    // 3.1. slick services slider
    $(".slick-services").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: false,
        autoplaySpeed: 5000,
        cssEase: "ease",
        speed: 1000
    });
    // 3.2. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 4. owl carousel
    // 4.1. owl testimonials carousel
    $("#testimonials-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false
    });
    // 4.2. owl works carousel
    $("#works-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
    // 4.3. owl news carousel
    $("#news-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 2,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 2
            }
        }
    });
	
    // 5. magnificPopup
    // 5.1. magnificPopup single
    $(".popup-photo-single").magnificPopup({
        type: "image",
        gallery: {
            enabled: false
        },
        removalDelay: 100,
        mainClass: "mfp-fade"
    });
    // 5.2. magnificPopup gallery
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade"
            // fixedContentPos: false
        });
    });
	
    // 6. navigation
    // 6.1. navigation icon
    $(".navigation-icon").on("click", function() {
        $(this).toggleClass("active");
    });
    // 6.2. navigation panels
    $(".navigation-fire").on("click", function(e) {
        if ($(".panel-navigation-from-left, .panel-navigation-from-right").hasClass("open")) {
            $(".panel-navigation-from-left, .panel-navigation-from-right").removeClass("open");
            $("#overlay").fadeOut(600);
        } else {
            $(".panel-navigation-from-left, .panel-navigation-from-right").addClass("open");
            $("#overlay").fadeIn(600);
        }
    });
    // 6.3. navigation links
    $("nav.navigation-menu a").on("click", function(e) {
        $(".navigation-icon").removeClass("active");
        $(".panel-navigation-from-left, .panel-navigation-from-right").removeClass("open");
    });
    // 6.4. navigation active state
    $("a.menu-state").on("click", function() {
        $("a.menu-state").removeClass("active");
        $("#overlay").fadeOut(600);
        $(this).addClass("active");
    });
    // 6.5. navigation hover state
    hoverMenu();
    imgMenu();
    function hoverMenu() {
        $(".menu li a").on("mouseenter", function() {
            var ref = $(this).data("ref"),
                menuImg = $('.menu-img[data-ref="' + ref + '"]');
            $(".menu li a").removeClass("active");
            $(this).addClass("active");
            $(".menu-img").removeClass("active");
            menuImg.addClass("active");
        });
    };
    function imgMenu() {
        $("[data-bg]").each(function() {
            var bg = $(this).data("bg");
            $(this).css({
                "background-image": 'url(' + bg + ')',
                "background-position": "center center",
                "background-size": "cover"
            });
        });
    };
	
    // 7. fullPage
    $("#fullpage").fullpage({
        anchors: ["home", "about", "services", "works", "news", "contact"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "About", "Services", "Works", "News", "Contact"],
        responsiveWidth: 1024,
        autoScrolling: true,
        scrollBar: false,
        afterResponsive: function(isResponsive) {}
    });
	
    // 8. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 9. toggle panels
    $(".c-btn-about, .c-btn-services, .c-btn-news").on("click", function() {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".about-more-launch, .navigation-icon").on("click", function() {
        $(".panel-from-left-about, .panel-from-right-about, .panel-overlay-from-left-about, .panel-overlay-from-right-about").removeClass("open");
    });
    $(".services-more-launch, .navigation-icon").on("click", function() {
        $(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").removeClass("open");
    });
    $(".news-more-launch, .navigation-icon").on("click", function() {
        $(".panel-left, .panel-right").removeClass("open");
    });
	
    // 10. forms
    // 10.1. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 11. clone function
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };
    // 11.1. horizontal lines
    $("<div class='upper-page'></div>").appendTo(".horizontal-lines-wrapper");
    $("<div class='horizontal-lines'></div>").duplicate(4).appendTo(".upper-page");
	$("<div class='upper-page-effect'></div>").appendTo(".horizontal-lines-wrapper-effect");
	$("<div class='running-teardrop'></div>").duplicate(4).appendTo(".upper-page-effect");
	
    // 12. social icons launcher
    $(".social-icons-launcher").on("click", function() {
        if ($(".social-icons-wrapper").hasClass("social-icons-wrapper-reveal-show")) {
            $(".social-icons-wrapper").removeClass("social-icons-wrapper-reveal-show").addClass("social-icons-wrapper-reveal-hide");
            $(".welcome-message").removeClass("welcome-message-reveal-hide").addClass("welcome-message-reveal-show");
        } else {
            $(".social-icons-wrapper").removeClass("social-icons-wrapper-reveal-hide").addClass("social-icons-wrapper-reveal-show");
            $(".welcome-message").addClass("welcome-message-reveal-hide").removeClass("welcome-message-reveal-show");
        }
    });
    // 12.1. social icons launcher additional CLOSER
    $(".navigation-icon, .logo").on("click", function() {
        $(".social-icons-wrapper").removeClass("social-icons-wrapper-reveal-show").addClass("social-icons-wrapper-reveal-hide");
        $(".welcome-message").removeClass("welcome-message-reveal-hide").addClass("welcome-message-reveal-show");
    });
	
    // 13. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 14. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 15. swiper slider
    // 15.1. swiper thumbnail slider horizontal thumbs
    var swipersliderTop = new Swiper(".swiper-slider-top", {
        direction: "vertical",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        autoplay: 4000,
        speed: 1600,
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: false,
        keyboardControl: false
    });
    var swipersliderBottom = new Swiper(".swiper-slider-bottom", {
        direction: "horizontal",
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: false,
        keyboardControl: false
    });
    swipersliderTop.params.control = swipersliderBottom;
    swipersliderBottom.params.control = swipersliderTop;
	
    // 16. google maps zoom ON/OFF
    $(".google-maps").on("click", function() {
        $('.google-maps iframe').css("pointer-events", "auto");
    });
    $(".google-maps").on("mouseleave", function() {
        $('.google-maps iframe').css("pointer-events", "none");
    });
	
	
});