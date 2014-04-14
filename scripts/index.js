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
    
( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );