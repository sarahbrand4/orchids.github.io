$(document).ready(function(){
	
	$('nav ul li a').click(function(){
	
		var el = $(this).attr('href');
		var elWrapped = $(el);
		
		scrollToDiv(elWrapped,40);
		
		return false;
	
	});
	
    $(function(){
        var s = skrollr.init({
            render: function(data) {
            }
        });
        
        
    });
 
});

