$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2.5
        },
        500: {
            items: 3.5
        },
        700:{
            items:4.5
        },
        800: {
            items: 5.5
        },
        1000:{
            items:5.5
        },
        1100: {
            items: 6.5
        },
        1300: {
            items: 7.5
        }
    }
})