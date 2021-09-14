$(function(){
    $('.slick_wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
      });

      $('.gender a').click(function(){
        $(this).removeClass('off');
        $(this).siblings().addClass('off');
      })

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 25,
        autoplay:{
          delay: 7000,
          disableOnInteraction: false,
        },
      });


      // 사이드 메뉴 오픈
      $('.sidemenu_open').click(function () {
        $('.dim').show();
        $('.home_sidemenu').addClass('modal_open');
      });

      $('.popup_close').click(function () {
        $('.dim').hide();
        $('.home_sidemenu').removeClass('modal_open');
      });

      $('.dim').click(function(){
      	$(".dim").hide();
        $('.home_sidemenu').removeClass('modal_open');
      });

})