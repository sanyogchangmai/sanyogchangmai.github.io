// $("i").removeClass(".side-nav-hide");
$(document).ready(function(){

    $(".hemburg").click(function(){
        $(".side-nav").toggleClass("side-nav-hide");
        $(".overlay").toggleClass("overlay-hide");
        $(".btn-floating").addClass("btn-floating-hide");

    });

    $(".overlay").click(function(){
        $(".overlay").toggleClass("overlay-hide");
        $(".side-nav").toggleClass("side-nav-hide");
        $(".btn-floating").removeClass("btn-floating-hide");
    });

    $(".side-link").click(function(){
        $(".overlay").toggleClass("overlay-hide");
        $(".side-nav").toggleClass("side-nav-hide");
        $(".btn-floating").removeClass("btn-floating-hide");
    });

});



