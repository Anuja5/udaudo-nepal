

    function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
       {
          e.style.display = 'none';

       }
          
       else
          e.style.display = 'block';
          pauseanimation();
         
          

    }

    function ticker() {
      $('#feeds').animate({
          top: '-20px'
      }, 6000, function () {
          $(this).animate({
              top: '0'
          }, 0);
          ticker();
      });
  }
  
  ticker();

  
  