<footer>
	<a href="#about" class="bt-up hide"><i class="fa fa-angle-up" aria-hidden="true"></i></a>	
	<div class="container">
		<div class="row center ">
			<div class="col-md-12">
				<p>Copyright © <?php echo date('Y');?> Developed by Tony Hong. All Rights Reserved.</p>
			</div>
			<div class="col-md-12">
				<p><a href="#about">About Me</a><a href="#portfolio">Portfolio</a><a href="#contact">Resume</a><a href="<?php echo $linkResponse; ?>">Blog</a></p>					
			</div>			
		</div>
		<div class="container ">
			<div class="col-md-12 center"><div class="line center-div"></div><a href=""><img class="ft-logo" src="assets/img/logo.png" alt="Tony Hong Logo"></a></div>
		</div>		
	</div>
</footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjz-8Ueb97ySnfd5Rq5X2PfMNFDmy0g80&callback=initMap" async defer>
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
<script src="assets/js/vendors.js"></script>
<script src="assets/js/custom.js"></script>
<script>


	function initMap() {
		var myLatLng = {lat:33.6835018, lng:-117.79519949999997};
		var map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng ,
			zoom: 10,
			scrollwheel:false,
			styles: [{
    			stylers: [{
      			saturation: -100,
      			"lightness": 65,
      			"visibility": "on"
    			}]
  			}]
		});
		var marker = new google.maps.Marker({
		    position: myLatLng,
		    map: map
	  	});
	}

	

</script>