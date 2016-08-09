/*********************************
 *       Animation               *               
 *********************************/
if ($(window).width() >= 1024) {
    //Welcome to Tony's Home
    $('.js--header-1').addClass('animated zoomIn');
    $('.js--header-2').addClass('animated zoomIn');
    $('.js--header-3').addClass('animated zoomIn');
    
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

    //contact: sidebar 
    $('.js--contact-2' ).waypoint(function(direction){
        $('.js--contact-2').addClass('animated bounce');
    },{offset:'50%'})
}