$(document).ready(function () {
    $('.trending-carousel').owlCarousel({
        margin: 10,
        navText: ['<img class="arrow-left" src="../Images/arrow-toggle.png"/>', '<img class="arrow-right" src="../Images/arrow-toggle.png" />'],
        //navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 4,

            }
        }
    })

    $('.feature-carousel').owlCarousel({
        margin: 10,
        //navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        navText: ['<img class="arrow-left" src="../Images/arrow-toggle.png"/>', '<img class="arrow-right" src="../Images/arrow-toggle.png" />'],
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 6,

            }
        }
    })
    $('.affordable-carousel').owlCarousel({
        margin: 10,
        //navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        navText: ['<img class="arrow-left" src="../Images/arrow-toggle.png"/>', '<img class="arrow-right" src="../Images/arrow-toggle.png" />'],
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 5,

            }
        }
    })
    $('.abroad').dropkick();

    $('.volunteer').dropkick();

    $('.anything').dropkick();

    $(window).scroll(function () {

        if ($(window).scrollTop() > 0) {
            $(".navbar-ul li a").addClass('blue');
            $(".navbar-ul li a").removeClass('text-white');
            $('.banner-logo').attr('src', "../Images/logo.png");
            $('nav').addClass('nav-background');
            $(".header-link .login-form a").removeClass('text-white');
            $(".header-link .login-form a").addClass('blue');
            $(".header-link .login-form").removeClass('login-form');

            $(".header-link form").addClass('navscroll-login');

        } else {
            $(".navbar-ul li a").addClass('text-white');
            $(".navbar-ul li a").removeClass('blue');
            $('nav').removeClass('nav-background')
            $('.banner-logo').attr('src', "../Images/logo_1.png");
            $(".header-link form").addClass('login-form');
            $(".header-link .login-form a").removeClass('blue');
            $(".header-link .login-form a").addClass('text-white');
            $(".header-link .login-form").removeClass('navscroll-login');

        }

    });
    $(".dk-select, .anywhere").css("width", ($(window).width() * 18) / 100);
    //$(".dk-select, .anywhere").css("height", ($(window).width() * 5) / 100);
    if ($(window).width() <= 1024 && $(window).width() >= 768) {
        $(".dk-select, .anywhere").css("width", ($(window).width() * 27) / 100);
    }
    $(window).on('resize', function () {
     
        if ($(window).width() > 1024) {
            $(".dk-select, .anywhere").css("width", ($(window).width() * 18) / 100);
        }
        if ($(window).width() <= 1024 && $(window).width() >= 768) {
            $(".dk-select, .anywhere").css("width", ($(window).width() * 27) / 100);
        }

    });


    $(function () {
        var availableTags = [
            "Ahmedabad",
            "Morbi",
            "Vadodra",
            "Junagadh"
        ];
        $("#auto-location").autocomplete({
            source: availableTags
        });
    });
});