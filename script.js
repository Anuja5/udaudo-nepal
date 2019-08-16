/*---smoooth scrolling--*/
$(document).ready(function () {
    $('a[href*="#"]:not([href="#"]):not([data-toggle]):not([href="#project_carousel1"]):not([href="#project_carousel2"]):not([href="#project_carousel3"]):not([href="#project_carousel4"]):not([href="#project_carousel5"]):not([href="#project_carousel6"]):not([href="#project_carousel7"]):not([href="#project_carousel8"])')
    .click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top-80,
                }, 1000);
                return false;
            }
        }
    });
    });


/*----news feeds scroll and toggle---*/
    
    function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
       {
          e.style.display = 'none';
          window.clearInterval(ticker());

       }
          
       else
          e.style.display = 'block';
          window.clearInterval(ticker());
    }

    function ticker() {
      $('#feeds').animate({
          top: '-20px'
      }, 5000, function () {
          $(this).animate({
              top: '0'
          }, 0);
          ticker();
      });
  }
  
  ticker();

  
  