$(document).ready(function(){
    
    var stickyTop = $('.names').offset().top;
    $(window).scroll(function(){
        var windowTop = $(window).scrollTop();
        if (stickyTop < windowTop) {
            $('.names').css({ position: 'fixed', top: 0});
        }
        else {
            $('.names').css('position', 'static');
        }
    });
    
// INIT SKROLLR
var s = skrollr.init();    

// REFRESH SKROLLR AFTER RESIZING OUR SECTIONS

s.refresh($('.homeSlide'));  
    
    

});