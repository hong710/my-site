/*********************************
 *       MobileNav                *               
 **********************************/
 /*logo*/
 if ($(window).width() <=1024) {
    $('nav >div >a >img').attr('id', 'logo-small');
    $('.logo').remove();

    $('.name').remove();
    $('nav >div >a >span').attr('id', 'name-small');
 }
$('.js--nav-mobile').click(function(){
    var nav = $('.js--main-nav');
    nav.slideToggle(200);//.2sec

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
        $('nav >div >a >img').show('1000');
        $('nav >div >a >span').show('1000');
    }
})