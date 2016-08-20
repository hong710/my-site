/***********************************
*  SCROLLSPY(Materialize)          *               
***********************************/
//using Materialize
$('.scrollspy').scrollSpy(); 

 /*********************************
 *       Parsley Validator       *               
 *********************************/
$('#contact-form').parsley(); 

//fix size of tell me more button header 
if ($(window).width() < 767) {
    var headerBtn= $('#tell-me');            
    headerBtn.addClass('bt-md');
    headerBtn.removeClass('bt-xlg');         
}
/**********************************
 *  NAVIGATION Scroll smoothly    *               
 **********************************/   
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
