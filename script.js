






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

    //categoly selection 




});//全体の閉じタグ

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