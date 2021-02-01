'use strict';

$(document).ready(function(){

    $('.burger').on('click', function(){
        $(this).toggleClass('burger--active')
        $('.menu__list').slideToggle(400)
    });
});
