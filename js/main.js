// document.addEventListener("DOMContentLoaded", function(event) { 
//     const modal = document.querySelector('.modal');
//     const modalBtn = document.querySelectorAll('[data-toggle="modle"]');
//     const closeBtn = document.querySelector('.modal__close');
//     const switchModal = () => {
//         modal.classList.toggle('modal--visible');
//     }
//     // Add event listener 'click'
//     modalBtn.forEach(element => {
//         element.addEventListener('click', switchModal);
//     });

//     closeBtn.addEventListener('click', switchModal);
//   });

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
});