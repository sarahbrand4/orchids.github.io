$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
                scrollTop: $("#div2").offset().top
                 }, 2000);
        return false;
    });
});