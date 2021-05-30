// $("i").removeClass(".side-nav-hide");
$(document).ready(function(){

    $("i").click(function(){
        $(".side-nav").toggleClass("side-nav-hide");
        $(".overlay").toggleClass("overlay-hide");

    });

    $(".overlay").click(function(){
        $(".overlay").toggleClass("overlay-hide");
        $(".side-nav").toggleClass("side-nav-hide");
    });

    $(".side-link").click(function(){
        $(".overlay").toggleClass("overlay-hide");
        $(".side-nav").toggleClass("side-nav-hide");
    });

});



