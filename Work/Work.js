$(document).ready(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() > 0) {
            $(".navbar-ul li a").addClass('blue');
            $(".navbar-ul li a").removeClass('text-white');
            $('.banner-logo').attr('src', "../Images/logo.png");
            $('nav').addClass('nav-background');
            $(".form-inline button").removeClass('text-white');
            $(".form-inline button").removeClass('border-light');
            $(".form-inline button").addClass('navscroll-login');
           
        } else {
            $(".navbar-ul li a").addClass('text-white');
            $(".navbar-ul li a").removeClass('blue');
            $('nav').removeClass('nav-background')
            $('.banner-logo').attr('src', "../Images/logo_1.png");
            $(".form-inline button").addClass('text-white');
            $(".form-inline button").removeClass('navscroll-login');
            $(".form-inline button").addClass('border-light');
        }

    });

});