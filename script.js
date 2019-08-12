/*---smoooth scrolling--*/
$(document).ready(function () {
    $('a[href*="#"]:not([href="#"]):not([data-toggle])').click(function() {
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

  
  