// swiper slider start
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
    
// testimonial slider start

    var swiper = new Swiper('.testimonial-slider', {
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
            nextEl: '.home3-testimonial-next',
            prevEl: '.home3-testimonial-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    // testimonial slider end

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