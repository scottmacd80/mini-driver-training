
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





//--------------------------------------------------------------------------------------------------------------
// DOCUMENT READY

$(function(){
    //show hide dev grid
    $("#devGrid").toggle(document.URL.indexOf("grid") !== -1);

    displayNav();


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


    $('.book-now').click(function(e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $("#booking-form").offset().top - 136
        }, 1000);
    });



}); // END DOCUMENT READY








//--------------------------------------------------------------------------------------------------------------
// WINDOW LOAD

$(window).load(function() {




}); // END WINDOW LOAD

//--------------------------------------------------------------------------------------------------------------
// WINDOW SCROLL

$(window).scroll(function() {




}); // END WINDOW SCROLL


//--------------------------------------------------------------------------------------------------------------
// WINDOW RESIZE

var resizeTimer;
$(window).resize(function() {

    clearTimeout(resizeTimer);


    resizeTimer = setTimeout(function() {

        displayNav();



    }, 600);
});  // END WINDOW RESIZE


