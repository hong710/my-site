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