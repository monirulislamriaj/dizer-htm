(function ($) {
    'use strict';

    $(document).on('ready', function () {
        // -----------------------------
        //  On Click Smooth scrool
        // -----------------------------
        $('.scrollTo').on('click', function (e) {
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: ($(target).offset().top)
            }, 500);
        });
        
        // mixitup filter
        var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
        var mixer;
        if (containerEl) {
            mixer = mixitup(containerEl, {
                selectors: {
                    target: '[data-ref~="mixitup-target"]'
                }
            });
        }
        //Active changer
        $('.filter-menu li').on('click', function () {
            $('.filter-menu li').removeClass('active');
            $(this).addClass('active');
        });

    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // accordion
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
    });

})(jQuery);