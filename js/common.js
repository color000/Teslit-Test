$(function(){
      
      // 메인 배너
      $('.slick_wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
      });

      // 남성, 여성 클릭시 on, off 
      $('.gender a').click(function(){
        $(this).removeClass('off');
        $(this).siblings().addClass('off');
      })

      // News
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
        $('body').addClass('modal_open');
      });

      // 사이드 메뉴 X버튼 클릭시 팝업 닫힘
      $('.popup_close').click(function () {
        $('.dim').hide();
        $('.home_sidemenu').removeClass('modal_open');
        $('body').removeClass('modal_open');
      });

      // 검은 배경 클릭시 팝업 닫힘
      $('.dim').click(function(){
      	$(".dim").hide();
        $('.home_sidemenu').removeClass('modal_open');
        $('body').removeClass('modal_open');
      });

      // 스크롤 되면 header 색상 들어가게
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
          $(".gnb_wrap").addClass("scrolltop");
        } else {
          $(".gnb_wrap").removeClass("scrolltop");
        }
      });


})