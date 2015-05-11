
/*-------------------------------------------------------*\
    Main
/*-------------------------------------------------------*/

$(document).ready(function(){

	if (Modernizr.history) {

	    console.log('yep, found the history API');

	    $('nav a').on('click', function (e){
	    	e.preventDefault();
	    	//var slug = $(this).data('slug');
	    	//var title = $(this).text();
	    	var url = $(this).attr('href');
	    	loadContent(url);
	    });

		window.addEventListener("popstate", function() {
			var lastState = location.pathname;
		    loadContent(lastState);
		});
	}
});

function loadContent(url) {
	console.log('load content  ' + url)
	$.get(url, function (data) {
	    data = $(data).find('.main').html();
	    $(".main").empty().append(data);
	    history.pushState(null, null, url);
	});
}

// flash business
var params = {wmode: "transparent",scale: "noscale", quality: "low"}
var attributes = {id: "rocket"}
var rocket = document.getElementById("rocket");
swfobject.embedSWF("flash/preloader.swf", rocket, "100%", "100%", 10, "", "", params, attributes);