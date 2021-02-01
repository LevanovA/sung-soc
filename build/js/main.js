'use strict';

$(document).ready(function(){

    $('.burger').on('click', function(){
        $(this).toggleClass('burger--active')
        $('.menu__list').slideToggle(400)
    });
});

'use strict';

$(document).ready(function(){

    $('.js-submenu').on('click', function(e){
        e.preventDefault();
    });

    $('.js-submenu').on('click', function(e){
        if ($(this).parent('.menu__item').find('.menu__sublist').is(":visible")) {
            $('.menu__item').removeClass('active');
            $('.menu__item .menu__sublist').slideUp(400);
        } else {
            $('.menu__item').removeClass('active');
            $('.menu__item .menu__sublist').slideUp(400);
            $(this).parent('.menu__item').toggleClass('active');
            $(this).parent('.menu__item').find('.menu__sublist').slideToggle(400);
        }
    });

    $('.menu__subitem').on('click', function(e){
        $('.menu__item').removeClass('active');
        $('.menu__item .menu__sublist').slideUp(400);
    });
});

'use strick'

$('.button--modal-open').on('click', function () {
    console.log('click')
})

'use strict';

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

//# sourceMappingURL=main.js.map
