// Remove 300ms tapping delay on mobile
window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);

// Get and display page load time
// This snippet modified from the original: https://codepad.co/snippet/585338
var beforeload = (new Date()).getTime();

function getPageLoadTime(){
	// calculate the current time in afterload
	var afterload = (new Date()).getTime();
	// now use the beforeload and afterload to calculate the seconds and round to 2 decimals max
	seconds = ((afterload-beforeload) / 1000).toFixed(2);
	// Place the seconds in the innerHTML to show the results
	$(".load-time").text('This page loaded in ' + seconds + ' seconds');
}

window.onload = getPageLoadTime;

// Smooth scroll to anchors
// This snippet modified from the original: http://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
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
// Thanks to LGSon on Stack Overflow for this bad boy: http://stackoverflow.com/questions/42706152/delay-background-color-opacity-until-background-image-loads
(function(el){
  el.forEach(function(e) {
    var style = e.currentStyle || window.getComputedStyle(e, false),
    bi = style.backgroundImage.slice(4, -1).replace(/["|']/g, "");
    var img = new Image();
    img.onload = function() { e.classList.add('loaded'); }
    img.src = bi;  
  });
})(document.querySelectorAll('.intro, .title-area-1'));