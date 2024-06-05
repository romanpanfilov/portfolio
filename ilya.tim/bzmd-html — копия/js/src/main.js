$(".bz-topnav__search-link").on("click", function(){
	$(".bz-search").toggleClass("show").delay(700);
	$(".bz-fallback").toggleClass("show").delay(700);
});
$(".bz-fallback").on("click", function(){
	$(".bz-search").removeClass("show");
	$(".bz-fallback").removeClass("show");
});
$(".bz-cookie__fallback").on("click", function(){
	$(".bz-cookie").hide();
});
$(".bz-cookie__btn").on("click", function(){
	$(".bz-cookie").hide();
});
