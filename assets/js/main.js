$(document).ready(function () {
    /*start the loading page */
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });
    //scroll to top make fade for button
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });  
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-btn").addClass('acitve');
        } else {
            $(".scroll-top-btn").removeClass('acitve');
        }
    });
    //scroll to top button
    $(".scroll-top-btn").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //start active navbar
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.navbar-nav').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });
    $('.nav-item').click(function(){
        $('.navbar-nav').toggleClass('active-nav');
        $('body').removeClass('overflowNone');
        $('.hamburger').toggleClass('active');
    });
   $('.add-popup').click(function(){
        $('.poup-window').addClass('acitve-popup');
        $('body').addClass('overflowNone');
   });
   $('.close-popup-window').click(function(){
        $('.poup-window').removeClass('acitve-popup');
        $('body').removeClass('overflowNone');
    });
    $('.form-group input[type="file"]').change(function(){
        $(this).next('.form-label-shape').text($(this).val())
    });
});
console.log('version 0.0.1');