 $(window).scroll(function(){
              if($(this).scrollTop()>500){
                $("#scroll").fadeIn(500);
              }
               if($(this).scrollTop()<400){
                $("#scroll").fadeOut(200);
              }
        });
          // $("#scroll").click(function(e){
          //   e.preventDefault();
          //   $(window).scrollTop(0);
          //   $("#scroll").fadeOut(0);



          // });
          $('#scroll').on('click', function(event) {
          event.preventDefault();
          $('html, body').animate({scrollTop:0}, 'slow');  
        });