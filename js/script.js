
"use strict";

if (window.location.hash) {
    $(".sub-page").hide();
    $('.header-main-menu li a').removeClass('active');
    $('section' + window.location.hash + ':first').show();
}

$('#header-main-menu li a, .home-buttons a, .pricing-table .btn').on("click", function (e) {
    if ($(e.target).is('.header-main-menu a, .home-buttons a, .pricing-table .btn')) {
        $('.header-main-menu li a').removeClass('active');
        $(this).addClass('active');
        $(".sub-page").hide();
        var target = $(e.target.hash);
        if (target.length) {
            var gap = 0;
            $(e.target.hash, 'html', 'body').animate({
                opacity: 'show',
                duration: "slow",
                scrollTop: target.offset().top - gap
            });
        }
        if ($(e.target).is('.home-buttons a')) {
            $("#header-main-menu li a[href='#contact']").addClass('active');
        }
        if ($(e.target).is('.pricing-table .btn')) {
            $("#header-main-menu li a[href='#contact']").addClass('active');
        }

    }
});


$('.responsive-icon').on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.header').animate({ 'margin-left': 285 }, 300);
    } else {
        $(this).removeClass('active');
        $('.header').animate({ 'margin-left': 0 }, 300);
    }
    return false;
});

$('.header a').on("click", function (e) {
    $('.responsive-icon').removeClass('active');
    $('.header').animate({ 'margin-left': 0 }, 300);

});

$(".cd-words-wrapper b:first-child").addClass("is-visible");



$('#preloader').fadeOut('slow', function () {
    $(this).remove();
});

