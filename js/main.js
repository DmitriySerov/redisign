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
        if ($(window).width()>500) {
            if($(window).scrollTop()>500){
                $('#scroll_top').fadeIn(900)
            }else{
                $('#scroll_top').fadeOut(700)
            }
        } else {
            $('#scroll_top').detach()
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
          },
          submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    alert('Форма отправлена, мы свяжемся с вами через 10 минут. Подписывайтесь на группу в ВК vk.com/glo_academy');
                },
                error: function(response){
                    console.error('Ошибка запрос'+ response)
                }
            });
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
    // Карта Яндекс

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [47.244729, 39.723187],
                zoom: 17
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/marker.png',
                // Размеры метки.
                iconImageSize: [32, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });
    
        myMap.geoObjects
            .add(myPlacemark);
    });
});