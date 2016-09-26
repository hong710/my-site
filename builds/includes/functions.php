<?php
/********************************************************
*INDEX 1 :	redirect_to									*
*FUNCTION: 	Use to redirect to new page 				*
*@pagram: 	the page name 								*
*return:	NO 											*
*										 				*
*********************************************************/
function redirect_to($new_location=NULL){
	if($new_location !=NULL){
		header("Location: {$new_location}");
		exit;
	}
}

/********************************************************
*INDEX 2 :	formatDate									*
*FUNCTION: 	Use Format the Date							*
*@pagram: 	$date										*
*return:	$date()										*
*										 				*
*********************************************************/
function formatDate($date){
	return date('F j, Y', strtotime($date));
}

/********************************************************
*INDEX 3	shortenText									*
*FUNCTION: 	Use Format the Text Shorter for paragraph	*
*@pagram: 	$text:the text want to shorten 				*
*			$chars:	how many char you want to show		*
*return:	datatype (string)							*
*										 				*
*********************************************************/
function shortenText($text, $chars=250){
	$text = substr($text, 0, $chars);
	$text = substr ($text, 0, strrpos($text," ")); //find the position of the last occurrence of the substring
	$text = $text."...";
	return strip_tags ($text);
}




?>