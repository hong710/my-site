<section id="contact" class="section scrollspy">
		<div class="container">			
	        <div class="page-heading"><h1>Contact <span>Me</span> </h1></div>
	    </div>        
        <div id="map"></div>
        <div class="container">
			<div class="row contact-section">
				<div class="col-md-5 info">
					<h3>Contact Information</h3>
					<div>
						<p><i class="fa fa-phone"></i>(925)-718-6694</p>
						<p><i class="fa fa-envelope-o"></i>tony.hongq@gmail.com</p>
						<p><i class="fa fa-map-marker"></i>Irvine, Southern California, US</p>
						<div class="social-link">
							<h4><i class="fa fa-link" aria-hidden="true"></i>Social Links</h4>
							<a href=""><i class="fa fa-linkedin"></i></a>
							<a href=""><i class="fa fa-facebook"></i></a>
							<a href=""><i class="fa fa-github"></i></a>
							<a href=""><i class="fa fa-twitter"></i></a>
							<a href=""><i class="fa fa-whatsapp"></i></a>
						</div>
					</div>
				</div>

				<div class="col-md-7 js--contact-1 ">

					<form class="main-form" id='contact-form' action="mailer.php" method="POST">
						<?php
						if(isset($_GET['success'])){					
							if($_GET['success']=='valid'){
								echo "<p class=\"message success\">Thank you! Your message has been sent.</p>";
							}elseif($_GET['success']=='error'){
								echo "<p class=\"message error\">Oops! Something went wrong. Please try again</p>";
							}
						}					
						?>				
						<div class="row">
							<div class="col-md-12 form-group input-group-lg">
							<h3>Get In touch</h3>
								<input class="form-control" type="text" name="name" placeholder="Your Name *" required tabindex=1>
								<input class="form-control" type="email" name="email" placeholder="Your Email *" required tabindex=2>
								
							</div>
							<div class="col-md-12 form-group input-group-lg">
								<input class="form-control" type="text" name="subject" placeholder="Your Subject *" required tabindex=3>
							</div>

							<div class="col-xs-12">
								<textarea class="form-control" name="message" placeholder="Your Message Here *..." required tabindex=5></textarea>
							</div>
							<div class="col-xs-12">
							<button class="bt-primary bt-md">Send Message</button>			
							</div>			
						</div>
						
					</form>
				</div>					
			</div>
		</div>
</section>