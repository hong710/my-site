$(document).ready(function(){
/*********************************
 *       Animation               *               
 *********************************/
if ($(window).width() >= 1024) {
    //Welcome to Tony's Home
    $('.js--header-1').addClass('animated zoomIn');
    $('.js--header-2').addClass('animated zoomIn');
    $('.js--header-3').addClass('animated bounce');
    
    //about mainskill header
    $('.js--about-1').waypoint(function(direction){
        $('.js--about-1').addClass('animated shake');
    },{
        offset:'50%'
    })

    //contact: form slide
    $('.js--contact-1' ).waypoint(function(direction){
        $('.js--contact-1').addClass('animated bounce');
    },{offset:'50%'})
}
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

/*********************************
 *       MobileNav                *               
 **********************************/
 /*logo*/
 if ($(window).width() <=1024) {
    $('.name').remove();
    $('nav >div >a >span').attr('id', 'name-small');
 }
$('.js--nav-mobile').click(function(){
    //change the icon to x
    var navIcon = $('.js--nav-icon');
    if(navIcon.hasClass('fa-bars')){
        $('nav >div >a >img').hide('1000');
        $('nav >div >a >span').hide('1000');
        navIcon.removeClass('fa-bars');
        navIcon.addClass('fa-times');
        
    } else{
        navIcon.removeClass('fa-times');
        navIcon.addClass('fa-bars');
        $('nav >div >a >img').show('2000');
        $('nav >div >a >span').show('2000');
    }
    var nav = $('.js--main-nav');
    nav.slideToggle('3000');//.2sec
});

/***********************************
 *  FOR STICKY NAVIGATION          *               
 ***********************************/ 
 //sticky nav is minimize nav when user scroll down

$('nav').removeClass('sticky-nav');
$('.js--about').waypoint(function(direction){
    if(direction=="down"){
        $('nav').addClass('sticky-nav').delay(4000);
        $('nav >div >a >span').attr('id', 'name-small');
    } else{
        $('nav').removeClass('sticky-nav');
        //change logo size back to orginal
        if($(window).width() >1024){   
            $('nav >div >a >img').attr('id', 'logo');
            $('nav >div >a >span').attr('id', 'name');
        }
    }
},{
   offset:'120px;' 
});

/***********************************
 *  FOR SCROLL UP BUTTON           *               
 ***********************************/    
$('.js--about').waypoint(function(direction){
    if(direction=="down"){
        $('.bt-up').removeClass('hide');
    } else{
        $('.bt-up').addClass('hide');
    }
},{
   offset:'-200px;' 
});

/***********************************
 *  Porfolio Display showcase      *               
 ***********************************/
$( ".sc-item" ).hover(
	/* Stuff to do when the mouse enters the element */	
	function() {
       
        $('>div',this).addClass('animated slideInDown');
         $('>div',this).removeClass('hide'); 
	}, 
	/* Stuff to do when the mouse leave the element */
	function() {	
	    $('>div',this).addClass('hide');
	}
);
});