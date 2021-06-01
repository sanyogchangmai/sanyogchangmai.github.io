// $("i").removeClass(".side-nav-hide");
$(document).ready(function(){

    $(".hemburg").click(function(){
        $(".side-nav").removeClass("side-nav-hide").animate({left:"80%"},"300");
        $(".overlay").removeClass("overlay-hide");
        $(".btn-floating").addClass("btn-floating-hide");

    });

    $(".overlay").click(function(){
        
        // $(".side-nav").addClass("side-nav-hide");
        $(".overlay").addClass("overlay-hide");
        $(".side-nav").animate({left:"-80%"},"slow");
        
        $(".btn-floating").removeClass("btn-floating-hide");
    });

    $(".side-link").click(function(){
        $(".overlay").toggleClass("overlay-hide");
        $(".side-nav").toggleClass("side-nav-hide").animate({left:"-80%"},"300");
        $(".btn-floating").removeClass("btn-floating-hide");
    });

});



