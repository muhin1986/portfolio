$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("#mainNav").addClass("scrolling");
    } else {
        $("#mainNav").removeClass("scrolling");
    }
});
$(".rslides").responsiveSlides({
    speed: 50,
});