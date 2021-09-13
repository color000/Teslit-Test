$(function(){
    $('.slick_wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      });
      $('.news_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
      });
})