$(document).ready(function(){

   $('.i-header__link, .i-header__mob-link').on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
   });

   $('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow');		
	});

   $('[data-animate]').scrolla({
  mobile: true
});
   return false;
   
});



// плавный скролл

//  $(function(){

//  $('a[data-target^="anchor"]').on('click.smoothscroll', function(){
//   var target = $(this).attr('href'),
//    bl_top = $(target).offset().top - 56;
//   $('body, html').animate({scrollTop:bl_top}, 700);
//   return false;
//  })
// });

// $(document).ready(function(){
// 	$('.i-header__link').click(function(){
// 		var target = $(this).attr('href');
// 		$('html, body').animate({
// 			scrollTop: $(target).offset().top
// 		}, 700);
// 	});


// });