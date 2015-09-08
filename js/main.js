(function(){
  'use strict';

  // only run ajax if history api is supported
  if (Modernizr.history) {

    function loadContent(page) {

      // update title 
      document.title = page.title;

      // update content
      $('.entry-content').html(page.content);

    }

    function pageState($content) {

      var page = {
        content : $content.find('.entry-content').html(),
        title : $content.filter('title').text()
      };

      return page;

    }

    $('nav a').on('click', function (event){
      
      event.preventDefault();
      var url = $(this).attr('href');
      console.log(url);

      // request new page through ajax
      var request = $.ajax(url);

      // what to do with ajax success
      request.done(function (data) {

          // create state object
          var page = pageState($(data));

          // change the page content
          loadContent(page);

          // push the state into history
          history.pushState(page, page.title, event.target.href);

      });

      // what to do if ajax fails
      request.fail(function () {

          // revert to normal navigation
          document.location = event.target.href;

      });

      //console.log(url.substring(0, url.length - 5).replace("/", ""));
      // use data object to set custom event value
      talkToRocket(url.substring(0, url.length - 5).replace("/", ""))

    });

    // handle forward/back buttons
    window.onpopstate = function(event) {

        // guard against popstate event on chrome init
        if (event.state) {
            // get the state and change the page content
            loadContent(event.state, true);
        }
        
    };


    function talkToRocket(value) {

      SWFAddress.setValue( value );

    }

  }


  // embed rocket flash if flash exists
  if (Modernizr.flash) {
    embedRocket();
  }

  function embedRocket() {

    // set parameter objects & ID
    var params = {
      wmode: "transparent",
      scale: "noscale", 
      quality: "low"
    }
    var attributes = {
      id: "rocket"
    }
    var rocket = document.getElementById("rocket");
    
    // use SWFObject library to embed swf
    swfobject.embedSWF("flash/preloader.swf", 
      rocket, "100%", "100%", 10, "", "", params, attributes);  

  }

}());