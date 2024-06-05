$(document).ready(function(){
var up = $("#up");

 $(window).scroll(function(){
              if($(this).scrollTop()>600){
                $(up).fadeIn(500);
              }
               if($(this).scrollTop()<500){
                $(up).fadeOut(200);
              }  

});
 $(up).on('click', function(event) {
          event.preventDefault();
          $('html, body').animate({scrollTop:0}, 'slow');
             
        });


  });