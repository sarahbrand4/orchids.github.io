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
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init();
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refreas($('.homeSlide'));
	    
	}
		
} )( jQuery );
    
    

});