jQuery(document).ready(function ($) {

    $('.list-faq').children('li').children('a').click(function (e) { 
        $(this).next('.faq-cont').slideToggle(300);
        $(this).toggleClass('active');
        return false;
        
    });
    $('.nav-tab li a').click(function (e) { 
        if($(this).parents('li').hasClass('active')) return false;
        $(this).next('.faq-cont').slideToggle(300);
        $('.nav-tab li').removeClass('active');
        $(this).parents('li').toggleClass('active');
        var data_active = $(this).parents('li').attr('data-active');
        $('.list-faq').css('display', 'none');
        $('.'+data_active).fadeIn(300);
        return false;
        
    });
    
    $('.btn-file').click(function (e) { 
        $('.file-input').removeClass('temp-active');
        $(this).parents('.file-input-wrp').find('.file-input').trigger('click');
        $(this).parents('.file-input-wrp').find('.file-input').addClass('temp-active');
        $(this).parents('.file-input-wrp').find('.file-input').val('');
        $(this).parents('.file-input-wrp').find('.name-txt').text('');
    });



    $(document).on('change', '.temp-active', function() {
        $(this).parents('.file-input-wrp').find('.file-input').removeClass('temp-active');
        realVal = $(this).val();
        lastIndex = realVal.lastIndexOf('\\') + 1;
        if(lastIndex !== -1) {
            realVal = realVal.substr(lastIndex);
            $(this).parents('.file-input-wrp').find('.name-txt').text(realVal);
        }
    });


/*    if ($(".owl-carousel1").hasClass("owl-carousel1")) {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            margin: 90,
            nav: true,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                768: {
                    margin: 40,
                    items: 2,
                },
                1024: {
                    items: 3,
                },
            },
        });
    } */

    /* if ($('.popup-with-zoom-anim').hasClass('popup-with-zoom-anim')) {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }
*/
});
