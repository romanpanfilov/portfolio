$(document).ready(function(){
var icon = $(".i-header__mob-img");
var fBack = $(".i-fallback");
var iBox = $(".i-header__mob-icon-box");

$(icon).on("click", function(e){
 	$(icon).toggleClass("show");
 	$(fBack).toggleClass("show");
 	$(iBox).toggleClass("show");
   });
$(fBack).on("click", function(e){
    $(fBack).toggleClass("show");
    $(icon).toggleClass("show");
    $(iBox).toggleClass("show");
  });


});