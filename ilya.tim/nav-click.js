$(document).ready(function(){
var btn = $(".i-header__btn");
var menu = $(".i-header__menu-mob-box");
var link = $(".i-header__mob-link, .i-header__link-ru");

$(btn).on("click", function(e){
 	$(btn).toggleClass("burger-active");
 	$(menu).toggleClass("show");

   });

 	$(link).on("click", function(e){
    	$(menu).toggleClass("show");
    	$(btn).toggleClass("burger-active");
	  });
});