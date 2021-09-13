$(function(){
    $('.slick_wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
      $('.news_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });

      $('.gender a').click(function(){
        $(this).removeClass('off');
        $(this).siblings().addClass('off');
      })
})