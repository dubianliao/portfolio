




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

    //button hover action
    $('.circle-wrap .circle').hover(
        function(){
            $(this).css('color','white');
            $(this).css('backgroundColor','gray');
        },
        function(){
            $(this).css('color','');
            $(this).css('backgroundColor','');
        });

});//全体の閉じタグ



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
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
})

//top logo background imge
$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 300) + 40;
    traY = ((4 * mouseY) / 300) + 50;
    console.log(traX);
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });
});

