$(document).ready(function(){

	if (Modernizr.flash) {
		embedRocket();
	}

	if (Modernizr.history) {

	    console.log('yep, found the history API');

	    $('nav a').on('click', function (e){
	    	e.preventDefault();
	    	//var slug = $(this).data('slug');
	    	//var title = $(this).text();
	    	var url = $(this).attr('href');
	    	loadContent(url);
	    });

	    // browser back - not working properly yet
		window.addEventListener("popstate", function(e) {
			var lastState = location.pathname;
		    loadContent(lastState);
		    talkToRocket(lastState.substring(0, lastState.length - 5).replace("/", ""))
		});
	}

	$('nav a').on('click', function(){
		talkToRocket( $(this).data('slug') );
	});	

});

function talkToRocket(value) {
	SWFAddress.setValue( value );
}

function loadContent(url) {
	console.log('load content  ' + url)
	$.get(url, function (data) {
	    data = $(data).find('.main').html();
	    $(".main").empty().append(data);
	    history.pushState(null, null, url);
	});
}

function embedRocket() {
	var params = {wmode: "transparent",scale: "noscale", quality: "low"}
	var attributes = {id: "rocket"}
	var rocket = document.getElementById("rocket");
	swfobject.embedSWF("flash/preloader.swf", rocket, "100%", "100%", 10, "", "", params, attributes);	
}