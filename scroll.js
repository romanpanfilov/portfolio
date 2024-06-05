 $(document).ready(function(){

var logo = $(".i-header__logo");

function scrollShow(showNumb, showClass){
	$(window).scroll(function (){
			if($(this).scrollTop()>showNumb){
                $(showClass).addClass("show");

              } else {
                $(showClass).removeClass("show");
              }

 });
}

scrollShow(50, logo);


// scroll links
    $(window).scroll(function () {

        $("section, header").each(function(){

            var id = $(this).attr("id"); // contact, home
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 56; 

            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
                $(".navbar-nav li a[href='#" + id + "']").addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + id + "']").removeClass("active");
            }
        });

        // $("section, header").each(function(){

        //     var id = $(this).attr("id"); // contact, home
        //     var hei = $(this).outerHeight();
        //     var grttop = $(this).offset().top - 56; 

        //     if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
        //         $(".navbar-nav li a[href='#" + id + "']").addClass("active");
        //     } else {
        //         $(".navbar-nav li a[href='#" + id + "']").removeClass("active");
        //     }
        // });

      
    });





















 });


