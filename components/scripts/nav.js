
/***********************************
 *  FOR STICKY NAVIGATION          *               
 ***********************************/ 
 //sticky nav is minimize nav when user scroll down

$('nav').removeClass('sticky-nav');
$('.js--about').waypoint(function(direction){
    if(direction=="down"){
        $('nav').addClass('sticky-nav');
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
