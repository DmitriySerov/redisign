$(document).ready(function () {
    // modal-window
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modle"]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    });
    $(document).on('keydown', function(e) {
        if (e.keyCode == 27 ){
            modal.removeClass('modal--visible');
        };
    });

    // scroll-up
    $(window).scroll(function(){
		if($(window).scrollTop()>500){
			$('#scroll_top').fadeIn(900)
		}else{
			$('#scroll_top').fadeOut(700)
		}
    });
    $(function(){
        $('#scroll_top').click(function(){
            $('html, body').animate({scrollTop: 0}, 600);
            return false;
        });
    });
    // slider-projects
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      })

      var next = $('.swiper-button-next');
      var prev = $('.swiper-button-prev');
      var bullets = $('.swiper-pagination');

      next.css('left', prev.width() + 10 + bullets.width() + 10)
      bullets.css('left', prev.width() + 10)
});