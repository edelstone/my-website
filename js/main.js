// Remove 300ms tapping delay on mobile
window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);

// Get and display page load time
// calculate the time before calling the function in window.onload
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
// This snippet modified from the original at: http://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 750);
    return false;
});

// Accordion
// This snippet modified from the original: http://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("panel-show");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
  	  panel.style.maxHeight = null;
    } else {
  	  panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}