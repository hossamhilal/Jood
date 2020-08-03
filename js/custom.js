/*global $ */
(function($) {
    "use strict";

    // Loader 
    $(window).on('load', function(){
        $('body').addClass('stopScroll');
        $('.loader').fadeOut(500, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        }); 
    });

    // Smooth Scroll
    $(document).on('click', '.navMenu a' , function (e) {
        e.preventDefault(); 
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });
    $(document).on('click', '.footerMenu a', function (e) {
        e.preventDefault(); 
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });


    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $('.navMenu').toggleClass('show');
        $('.overlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.overlay').on('click', function(){
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });
    
    // Sponsors OWL 
    $('.owlSponsors').owlCarousel({
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Screens OWL 
    $('.owlScreens').owlCarousel({
        margin: 30,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        center : true ,
        autoplaySpeed : 4000,
        autoplayTimeout : 4000,
        smartSpeed: 4000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // COUNTER
    var a = 0;
    function count () {
        $('.countNum').each(function () {
            let countNum = $(this).text();
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        a = 1;
    }

    $(window).scroll(function() {
        var oTop = $('.counts').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            count();
        }
    });


    // Loading 
    let loading = document.querySelector(".loading");
    let letters = loading.textContent.split("");
    loading.textContent = "";
    letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i / 10}s`;
        loading.append(span);
    });



    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

