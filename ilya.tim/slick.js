$(document).ready(function(){
      $('.i-adaptive__slick').slick({
        vertical: true,
        slidesToShow: 1,
         speed: 1000,
		  slidesToScroll: 1,
		  arrows: false,
		   dots: true,
		   verticalSwiping: true,
		  //  autoplay: true,
		  // autoplaySpeed: 1500
	
		    responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        autoplay: true,
				  autoplaySpeed: 1500,
				  swipe: false,
				  pauseOnFocus: false,
				  pauseOnHover: false,
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        autoplay: false,
				  autoplaySpeed: 1500
		      }
		    }
	    ]
		    
      });


    });