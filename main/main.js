$(function(){

$("#main").fullpage({
    
    anchors:['xm01', 'xm02', 'xm03', 'xm04'],
    afterLoad: function(origin, destination, direction){
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
               
    },
});


$("#mopen").on("click", function(){
    $(this).toggleClass("on");
    $("#cover_nav").toggleClass("on");
});
    
$("#cover_nav .link a").on("click", function(){
    $("#cover_nav").removeClass("on");
    $("#mopen").removeClass("on");
});

$(".pt_slider").slick({
    arrows:false,
    slidesToShow: 1,
    dots:true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,}
          },
        ]
});

$(".pf01 i.xi-angle-left-thin").on("click", function(){
    $(".pt_slider").slick("slickPrev");
});

$(".pf01 i.xi-angle-right-thin").on("click", function(){
    $(".pt_slider").slick("slickNext");
});

$(".pf01 .xi-pause").on("click", function(){
    $(".pf01_video").trigger("pause");
});


$(".pf01 .xi-play").on("click", function(){
    $(".pf01_video").trigger("play");
});

$(".pf03 i.xi-angle-left-thin").on("click", function(){
    $(".pt_slider").slick("slickPrev");
});

$(".pf03 i.xi-angle-right-thin").on("click", function(){
    $(".pt_slider").slick("slickNext");
});




})


