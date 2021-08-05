$('.bannerSlider').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    nav:false,    
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

new WOW().init();