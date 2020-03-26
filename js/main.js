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
    //   slider steps section

    new WOW().init();

    // Валидация форм
    $('.modal__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            // Правило-объект
            userEmail: {
              required: true,
              email: true
            }
          },
        //   сообщения
          messages: {
            userName: {
                required: "Поле обязательно",
                minlength: "Имя не короче 2 букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: "Поле обязательно",
            userEmail: {
              required: "Поле обязательно",
              email: "Введите корректный email"
            }
          }
    });
    // Валидация формы контроля
    $('.control__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required"
          },
        //   сообщения
          messages: {
            userName: {
                required: "Поле обязательно",
                minlength: "Имя не короче 2 букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: "Поле обязательно",
          }
    });
    // валидация формы footer

    $('.footer__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            userQuestion: {
                required: true,
                minlength: 1,
                maxlength: 150
            }
          },
        //   сообщения
          messages: {
            userName: {
                required: "Поле обязательно",
                minlength: "Имя не короче 2 букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: "Поле обязательно",
            userQuestion: {
                required: "Поле обязательно",
                minlength: "Введите вопрос",
                maxlength: "Максмальное кол-во символов 50"
            }
          }
    });

    // Маска для телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___)___-__-__"});
});