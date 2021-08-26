$(document).ready(function(){
    $(".slick-wrap").slick({
        slidesToShow: 3,
        arrows: false,
        infinite: true ,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000 ,
    });
    $(".section1>h1>.btn>.box1").click(function(){
        $(".slick-wrap").slick('slickPrev');
    });
    $(".section1>h1>.btn>.box2").click(function(){
        $(".slick-wrap").slick('slickNext');
    });

    $(".section1>h1>.btn>.stop-btn").click(function(){

        $(".section1>h1>.btn>.stop-btn").addClass("active");
        $(".section1>h1>.btn>.play-btn").removeClass("active");
        $(".slick-wrap").slick("slickPause");

    });

    $(".section1>h1>.btn>.play-btn").click(function(){

        $(".section1>h1>.btn>.play-btn").addClass("active");
        $(".section1>h1>.btn>.stop-btn").removeClass("active");
        $(".slick-wrap").slick("slickPlay");

    });

    $(".top-menu>.right-menu>li>.ham-btn").click(function(){
        if($(".top-menu>.right-menu>li>.ham-btn").hasClass("active")){
            $(".top-menu>.right-menu>li>.ham-btn").removeClass("active");
            $(".site-map-wrap").removeClass("active");
        }else{
            $(".top-menu>.right-menu>li>.ham-btn").addClass("active");
            $(".site-map-wrap").addClass("active");
        }
    });
});