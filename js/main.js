// Remove 300ms tapping delay on mobile
window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);

//Get and display page load time
//calculate the time before calling the function in window.onload
var beforeload = (new Date()).getTime();

function getPageLoadTime(){
	//calculate the current time in afterload
	var afterload = (new Date()).getTime();
	// now use the beforeload and afterload to calculate the seconds
	seconds = (afterload-beforeload) / 1000;
	// Place the seconds in the innerHTML to show the results
	$(".load-time").text('This page loaded in ' + seconds + ' seconds.');
}

window.onload = getPageLoadTime;