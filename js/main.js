
var active;
active = true;


// make sure the nav always appears on desktop
function displayNav() {
    if (Modernizr.mq('(min-width: 1024px)')) {
        $('.main-nav').css({
            'display':''
        });

        $('.hamburger').removeClass('is-active');
        $('html, body').removeClass('nav-open');

        active = true;

    }
}


function fixedHeaderOffset(){

    if (Modernizr.mq('(min-width: 768px)')) {

        var siteHeaderHeight = $('.site-header').outerHeight();

        $('.content').css({
            'padding-top': siteHeaderHeight + 'px'
        });

        $('.main-nav').css({
            'padding-top': ''
        });

    } else{
        $('.content, .main-nav').css({
            'padding-top': siteHeaderHeight + 'px'
        });
    }

}

function moveMobileNavItems(){

    if (Modernizr.mq('(min-width: 1024px)')) {

        $('.main-nav').appendTo('.main-nav-container');
        $('.site-search-form').insertAfter('.site-header');

    } else if (Modernizr.mq('(max-width: 1023px)')) {

        $('.main-nav').appendTo('.mobile-nav-container');
        $('.site-search-form').appendTo('.main-nav');
    }
}


function paginationWrapper(){

    $('.gallery.slick-initialized').each( function(){




            var paginationContainer = $(this).prev();

            console.log(paginationContainer);


            // get the number of slides
            var numberOfSlides = $(this).find('.slick-slide').not( ".slick-cloned" ).size();

            // Get the current slide
            var currentSlide = $(this).slick('slickCurrentSlide');

            //create container element
            paginationContainer.find(".gallery-pagination").prepend("<span class='slide-counter'></span>");
            paginationContainer.find('.slide-counter').html(currentSlide + 1 + ' / ' + numberOfSlides);


            // display current/number of slides when pagination is clicked
            $(this).on('afterChange', function(event, slick, currentSlide, nextSlide){
                paginationContainer.find('.slide-counter').html(currentSlide + 1 + ' / ' + numberOfSlides);
            });


            if ( numberOfSlides === 1){
                $('.gallery-pagination').hide();
            }



    });

}

function storyMargin(){


    if (Modernizr.mq('(min-width: 769px)')) {

        $('.timeline .story').each(function(){

            var elementHeight = $(this).outerHeight();
            var elementMargin = (elementHeight / 3) * 2;

            $(this).css({
                'margin-top' : '-' + elementMargin + 'px'
            });
        });

    } else if (Modernizr.mq('(max-width: 768px)')) {

        $('.timeline .story').each(function(){

            $(this).css({
                'margin-top' : '-2.555555556em'
            });
        });

    }




}


function anchoredImgHeight(){


    // set height of anchored img on homepage

    $('.anchored-img').each( function(){


        if (Modernizr.mq('(max-width: 1024px)')) {

            var h1Height = $(this).next().find('h1').outerHeight(true);
            var h2Height = $(this).next().find('h2').outerHeight(true);
            var imgHeight = h1Height + h2Height + 54;

            $(this).css({
                'height': imgHeight + 'px'
            });


        } else{
            $(this).css({
                'height': '100%'
            });
        }

    });


}

function moveNewsletterSubmitBtn(){
    var submitTarget = $('.newsletterSubmit').prev().children().last().children().children('div');

    $('.newsletterSubmit').appendTo(submitTarget);
}


function shortScreen(){
    if (Modernizr.mq('(max-height: 767px)')) {

        //$('body').addClass('scrolled');

    }
}



//--------------------------------------------------------------------------------------------------------------
// DOCUMENT READY

$(function(){
    //show hide dev grid
    $("#devGrid").toggle(document.URL.indexOf("grid") !== -1);



    moveMobileNavItems();
    displayNav();
    $(".video-container").fitVids();
    storyMargin();
    anchoredImgHeight();
    moveNewsletterSubmitBtn();
    shortScreen();

    // mobile toggle

    $('.hamburger').click(function() {


        if( $(this).hasClass('disabled') ){
            return;
        } else if (active === true) {

            $('.hamburger').addClass('is-active');
            active = false;

            $('html').addClass('nav-open');
            $('body').addClass('nav-open');

            return;
        } else {
            $('.hamburger').removeClass('is-active');
            active = true;

            $('.main-nav').hide();

            $('html').removeClass('nav-open');
            $('body').removeClass('nav-open');

            return;
        }
    });



    $('.search-toggle a').click(function(e) {

        e.preventDefault();

        $('.site-search-form').toggleClass('flex');

        $('.site-search-form input').focus();

    });

    $('.search-close').click(function(e) {
        e.preventDefault();

        $('.site-search-form').toggleClass('flex');

        $('.site-search-form input').blur();

    });

    $('.scroll').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        $('html, body').animate({
            scrollTop: $this.parent().next().offset().top - 76
        }, 1000);

    });

    $('.reveal-more').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        $this.prev().toggle();

        if( $this.hasClass('on') ){
            $this.removeClass('on').html('More info');
        } else{
            $this.addClass('on').html('Less info');
        }


    });


    $('.flavour-wheel-toggle').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        $this.prev().toggle();

        if( $this.hasClass('on') ){
            $this.removeClass('on').html('View flavour wheel <div class="icon-container"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-scroll"></use></svg></div>');
        } else{
            $this.addClass('on').html('<div class="icon-container"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-scroll"></use></svg></div>');
        }


    });

    $('.column-panel').last().addClass('last');




    //carousels

    $gallery = $('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true
    });

    $('#galleryNext').click(function(e) {
        e.preventDefault();

        $gallery.slick('slickNext');
    });

    $('#galleryPrev').click(function(e) {
        e.preventDefault();

        $gallery.slick('slickPrev');
    });

    paginationWrapper();



    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-slider-next"></use></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-slider-prev"></use></svg></button>',
        infinite: false,
        swipe: false,
        responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });


    $('.carousel').each( function(){


        var slickSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            asNavFor: '.carousel-nav',
            infinite: false,
            fade: true
        };

        var $slick = $(this);

        if (!$slick.length) {
            //return;
        }

        var $savedNode = $slick.clone();

        var slickOrNot = function () {
            var $windowWidth = $(window).width();
            if ($windowWidth > 767) {
                if (!$slick.hasClass("slick-initialized")) {
                    $slick.slick(slickSettings);
                }
            } else {
                if ($slick.hasClass("slick-initialized")) {
                    $slick.slick('unslick');
                    $slick.after($savedNode);
                    $slick.remove();
                    $slick = $savedNode;
                    $savedNode = $slick.clone();

                }
            }
        };


        slickOrNot();
        $(window).resize(slickOrNot);

    });



    $('.carousel-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.carousel',
      dots: false,
      focusOnSelect: true,
      swipe: false,
      infinite: false,
      nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-box-arrow-right"></use></svg></button>',
      prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-box-arrow-left"></use></svg></button>'


    });


    $('.carousel-full-width').each( function(){


        var slickSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            asNavFor: '.carousel-nav-full-width',
            infinite: false,
            fade: true,
        };

        var $slick = $(this);

        $slick.slick(slickSettings);

    });

    $('.carousel-nav-full-width').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.carousel-full-width',
      dots: false,
      focusOnSelect: true,
      swipe: false,
      infinite: false,
      nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-box-arrow-right-small"></use></svg></button>',
      prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-box-arrow-left-small"></use></svg></button>',
              responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]


    });



    $('.awards-copy').each( function(){


        var slickSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            asNavFor: '.awards',
            infinite: false,
            fade: true,
        };

        var $slick = $(this);

        $slick.slick(slickSettings);

    });

    $('.awards').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.awards-copy',
      dots: false,
      centerMode: true,
      centerPadding: '220px',
      focusOnSelect: true,
      swipe: false,
      nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-slider-next"></use></svg></button>',
      prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-slider-prev"></use></svg></button>',
              responsive: [
    {
      breakpoint: 767,
      settings: {
        centerPadding: '60px'
      }
    }
  ]


    });



    $('.carousel-full-width-no-nav').each( function(){


        var slickSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            infinite: false,
            fade: true,
            nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-box-arrow-right-small"></use></svg></button>',
            prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-box-arrow-left-small"></use></svg></button>'
        };

        var $slick = $(this);

        $slick.slick(slickSettings);

    });


    $('.hero-carousel').each( function(){


        var slickSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false
        };

        var $slick = $(this);

        $slick.slick(slickSettings);

    });


    $('.mobile-slider').each( function(){


        var slickSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            nextArrow: '<button type="button" class="slick-next"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-slider-next"></use></svg></button>',
            prevArrow: '<button type="button" class="slick-prev"><svg class="icon"><use xlink:href="/assets/img/sprite.svg#icon-slider-prev"></use></svg></button>',
            infinite: false,



        };

        var $slick = $(this);

        if (!$slick.length) {
            //return;
        }

        var $savedNode = $slick.clone();

        var slickOrNot = function () {
            var $windowWidth = $(window).width();
            if ($windowWidth < 767) {
                if (!$slick.hasClass("slick-initialized")) {
                    $slick.slick(slickSettings);
                }
            } else {
                if ($slick.hasClass("slick-initialized")) {
                    $slick.slick('unslick');
                    $slick.after($savedNode);
                    $slick.remove();
                    $slick = $savedNode;
                    $savedNode = $slick.clone();

                }
            }
        };


        slickOrNot();
        $(window).resize(slickOrNot);

    });


    $('.carousel-full-width-no-nav .slick-next, .carousel-full-width-no-nav .slick-prev').appendTo('.carousel-full-width-no-nav .slick-dots');


    // target 1st word of nav items

    $(".main-nav a").each( function(){
        $(this).html(function(){
          var text= $(this).text().trim().split(" ");
          var first = text.shift();
          return (text.length > 0 ? "<span class='first'>"+ first + "</span> " : first) + text.join(" ");
        });
    });








}); // END DOCUMENT READY








//--------------------------------------------------------------------------------------------------------------
// WINDOW LOAD

$(window).load(function() {

    //fixedHeaderOffset();



}); // END WINDOW LOAD

//--------------------------------------------------------------------------------------------------------------
// WINDOW SCROLL

$(window).scroll(function() {


    // add class when page is scrolled

    if( $(this).scrollTop() < 200 ) {
        $('body').removeClass('scrolled');
    } else {
        $('body').addClass('scrolled');
        $('body').removeClass('initial-load');
    }





}); // END WINDOW SCROLL


//--------------------------------------------------------------------------------------------------------------
// WINDOW RESIZE

var resizeTimer;
$(window).resize(function() {

    clearTimeout(resizeTimer);


    resizeTimer = setTimeout(function() {

        moveMobileNavItems();
        displayNav();
        storyMargin();
        anchoredImgHeight();
        shortScreen();
        //fixedHeaderOffset();


    }, 600);
});  // END WINDOW RESIZE


