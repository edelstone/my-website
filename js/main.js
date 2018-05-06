// Remove 300ms tapping delay on mobile
window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);


// Tooltip settings
$('.tooltip').tooltipster({
	animationDuration: [250, 100],
	delay: [50, 100],
	distance: 0,
	interactive: true
});


// Featherlight settings
$.extend($.featherlight.defaults, {
  openSpeed: 100,
  closeSpeed: 100,
	closeOnClick: 'anywhere',
	closeIcon: '&#10006;'
});


// Initialize accordion
$('.js-accordion').accordion();


// Smooth scroll to anchors
// http://stackoverflow.com/questions/7717527
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 600, function () {
        window.location.hash = href;
    });
    return false;
});


// Add opacity class after loading banner background image
// http://stackoverflow.com/questions/42706152
(function(el){
  el.forEach(function(e) {
    var style = e.currentStyle || window.getComputedStyle(e, false),
    bi = style.backgroundImage.slice(4, -1).replace(/["|']/g, "");
    var img = new Image();
    img.onload = function() { e.classList.add('float-up'); }
    img.src = bi;
  });
})(document.querySelectorAll('.title-area'));
