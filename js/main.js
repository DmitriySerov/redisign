$(document).ready(function () {
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

});