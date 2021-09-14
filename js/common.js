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
        if (scroll >= 1) {
          $("header").addClass("scrolltop");
        } else {
          $("header").removeClass("scrolltop");
        }
      });


      $('.up_down_wrap .up_down_click').click(function(){

        const open = $(this).next('.up_down').height();
        const el = $(this).next('.up_down'),
            curHeight = el.height(),
            autoHeight = el.css('height', 'auto').height();
     
        if( open === 0 ){
            el.height(curHeight).animate({height: autoHeight}, 100);
            $(this).removeClass('up');
        }else{
            el.animate({height: 0}, 100);
            $(this).addClass('up');
        }
    });

})