// --------------------------
    //       Main js file
    // --------------------------
    // swiper slider start
"use strict";

    $(document).ready(function() {
    // Swiper: Slider
        new Swiper('.banner-swiper-slide', {
            loop: true,
            slidesPerView: 1,
            speed:2000,
            spaceBetween: 30,
            effect: "fade",
            paginationClickable: true,
            fadeEffect: { crossFade: true },
            autoplay: {
                delay: 2500, 
                disableOnInteraction: false, 
            },
            navigation: {
                nextEl: '.prevButton',
                prevEl: '.nextButton',
            },
            breakpoints: {
                576: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                992: { slidesPerView: 3, spaceBetween: 20 },
                1200: { slidesPerView:1, spaceBetween: 15 },
              },
        });
    });
    // swiper slider end
    
    // testimonial slider start two
    var swiper = new Swiper('.testimonial-slider-two', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 2500,
        effect: 'fade',             // Use the fade effect
        fadeEffect: {
        crossFade: true           // Enable cross-fade transition
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.home2-testimonial-next',
            prevEl: '.home2-testimonial-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // testimonial slider end two

    // logo area marquee start
    $(".marquee_text").marquee({
        direction: "left",
        duration: 45000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true,
    });
    function scrollTo() {
        $(window).scrollTo({ top: 0, behavior: 'smooth' });

    }
    // logo area marquee end
// testimonial slider section start
    var swiper = new Swiper('.testimonial-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 25,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.home2-testimonial-next',
            prevEl: '.home2-testimonial-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
    });
    // testimonial slider section end


    // home 3 testimonial section start
    var swiper = new Swiper('.testimonial-swiper-slide', {
        // loop: true,
        // slidesPerView: 1,
        // spaceBetween: 25,
        // // speed: 2500,
        // // effect: 'fade',             // Use the fade effect
        // // fadeEffect: {
        // //   crossFade: true           // Enable cross-fade transition
        // // },
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        // navigation: {
        //     nextEl: '.nextButton3',
        //     prevEl: '.prevButton3 ',
        // },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
    
        loop: true,
        slidesPerView: 1,
        spaceBetween: 25,
        speed: 2500,
        effect: 'fade',            
        fadeEffect: {
          crossFade: true           
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.nextButton3',
            prevEl: '.prevButton3',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    // home 3 testimonial section end

	// sidebar
	$('.right-sidebar-button').on("click", function () {
		$('.right-sidebar-menu').addClass('show-right-menu');
	});
	$('.right-sidebar-close-btn').on("click", function () {
		$('.right-sidebar-menu').removeClass('show-right-menu');
	});

    // Search Btn
	$(".search-btn").on("click", function (e) {

		let parent = $(this).parent();

		parent.find(".search-input, .lang-card").toggleClass("active");

		e.stopPropagation();

	});
	$(document).on("click", function (e) {
		if (!$(e.target).closest(".search-input, .search-btn").length) {
			$(".search-input").removeClass("active");
		}
	});
	$(".search-close").on("click", function (e) {
		$(".search-input").removeClass("active");
	});
// side menu


	// Preloader 
	jQuery(window).on('load', function () {
		$(".preloader").delay(1600).fadeOut("slow");
	});

	$('.sidebar-button').on("click", function () {
        $(this).toggleClass('active');
    });

	document.querySelector('.sidebar-button').addEventListener('click', () =>
		document.querySelector('.main-menu').classList.toggle('show-menu'));

	$('.menu-close-btn').on("click", function () {
		$('.main-menu').removeClass('show-menu');
	});
