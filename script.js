




$(function(){

    //swiper navigation btn
    $('.next').click(function(){
        $('.swiper-button-next').click();
    });
    $('.prev').click(function(){
        $('.swiper-button-prev').click();
    });

    //swiper hover action
    $('.swiper-slide .img-wrap').hover(
        function(){
            $(this).find('.img-cover').fadeOut();
        },
        function(){
            $(this).find('.img-cover').fadeIn();
        });
    //hover CONTACT US > action
    $('.contact-link').hover(function(){
        $(this).animate({'paddingLeft':'10px'},300);
        $(this).find('.righticon').
        animate({'paddingLeft':'10px'},300);
    },
    function(){
        $(this).animate({'paddingLeft':''},300);
        $(this).find('.righticon').
        animate({'paddingLeft':''},300);
    });




});//全体の閉じタグ



//$(window).on('scroll',function(){
//    var scrollDis = $(window).scrollTop();
//    var scrollElm = $('#content-second').offset().top();
//    var vh = $(window).height();
//    var target = $('#content-second');
//    if(scrollDis > scrollElm - vh + (vh / 2)){
//        target.fadeIn();
//    }    
//});


//swiper plug in
var mySwiper = new Swiper ('.swiper-container', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides : false,
    //pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    breakpoints: {
        1000: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: '.swiper-pagination',
        }
    }
})

//top logo background imge

$(document).ready(function(){
    var windowWidth = $(window).width();
    var setVw = 1000;
    if(windowWidth >= setVw){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    $('.title').animate({opacity:'1.0'},2000);
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 300) + 40;
    traY = ((4 * mouseY) / 300) + 50;
    console.log(traX);
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });
}else{

}

});

