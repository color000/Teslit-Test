$(function(){
      
  $('.modal1').click(function () {
    $('.dim').show();
    $(".membership_modal_1").show();
    $('body').addClass('modal_open');
  });

  $('.modal2').click(function () {
    $('.dim').show();
    $(".membership_modal_2").show();
    $('body').addClass('modal_open');
  });

  $(".btn_clear").click(function(){
    $(".dim").hide();
    $(".membership_modal_1").hide();
    $(".membership_modal_2").hide();
    $('body').removeClass('modal_open');
  })



    // 위로 올라가는 버튼
      $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('.up_btn_wrap').fadeIn();
            } else {
                $('.up_btn_wrap').fadeOut();
            }
        });
        
        $(".up_btn_wrap").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });
      });


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

      // 달력 on
      $('.calendar_swiper .date').click(function(){
        $('.date').removeClass('on');
        $(this).addClass('on');
      })

      // 전체, 진행중, 참여중
      $('.class_on a').click(function(){
        $('.class_on a').removeClass('on');
        $(this).addClass('on');
      })

      
      // 수정, 삭제 버튼 클릭
      $(".list .menu").click(function () {
        $(this).siblings('.edit_popup').show();
        return false; //중요
      });

      $(".pro_header .write").click(function () {
        $(this).siblings('.edit_popup').show();
        return false; //중요
      });

      $(".pro_header .filter").click(function () {
        $(this).siblings('.edit_popup').show();
        return false; //중요
      });
   
      // 외부영역 클릭 시 팝업 닫기
      $(document).mouseup(function (e){
        var LayerPopup = $(".edit_popup");
        if(LayerPopup.has(e.target).length === 0){
          LayerPopup.hide();
        }
      });
   
      
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


      // var swiper = new Swiper('.calendar_swiper', {
      //   slidesPerView: 7,
      //   direction: getDirection(),
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      //   on: {
      //     resize: function () {
      //       swiper.changeDirection(getDirection());
      //     },
      //   },
      // });

      // function getDirection() {
      //   var windowWidth = window.innerWidth;
      //   var direction = window.innerWidth <= 10 ? 'vertical' : 'horizontal';

      //   return direction;
      // } 한개씩 넘어가고 싶을때


      //여러개씩 넘어가고싶을때 시작
      var swiper = new Swiper(".calendar_swiper", {
        slidesPerView: 7,
        spaceBetween: 10,
        slidesPerGroup: 7,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }); 
      //여러개씩 넘어가고싶을때 끝

      // 멤버쉽
      // $('.modal1').click(function () {
      //   $('.dim').show();
      //   $('body').addClass('modal_open');
      // });


})