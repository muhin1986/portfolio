// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$('.p1p2').parallax({imageSrc: 'img/p1p2.jpg'});
$('.p3').parallax({imageSrc: 'img/Hbg.jpg'});
$('.p4').parallax({imageSrc: 'img/p1p2.jpg'});
$('.footer').parallax({imageSrc: 'img/ff.jpg'});

$('.jm').typeIt({
     strings: 'This is a simple string.',
     speed: 100,
     autoStart: false,
    breakDelay:500

});
$(document).ready(function() {
		$('.mu').funnyText({
		speed: 100,
		borderColor: 'black',
		activeColor: 'red',
		color: 'black',
		fontSize: '45px',
		direction: 'both'
	});
    
});
