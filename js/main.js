// Remove 300ms tapping delay on mobile
window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);

// Get and display page load time
// calculate the time before calling the function in window.onload
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

//Smooth scroll to anchors
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
    return false;
});


//Accordion
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