const tnslider = tns({
    container: '.slider-reviews',
    slideBy: 1,
    autoplay: true,
    autoplayButton: false,
    nav: true,
    navPosition: 'bottom',
    speed: 1000,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    loop: true,
    controlsContainer: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        }
    }
});