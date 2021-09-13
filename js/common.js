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
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
          delay : 7000,   // 시간 설정
          disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
      });
})