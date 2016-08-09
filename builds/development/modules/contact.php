<section id="contact" class="section scrollspy">
		<div class="container">
			<div class= "separator">
	            <h1>Contact</h1>
	            <div></div>        
	        </div>
        
		<div class="row">
			<div class="col-md-8 js--contact-1 ">
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
						<div class="col-md-6 form-group input-group-lg">
							<input class="form-control" type="text" name="name" placeholder="Your Name *" required tabindex=1>
							<input class="form-control" type="text" name="subject" placeholder="Your Subject *" required tabindex=3>
						</div>

						<div class="col-md-6 form-group input-group-lg">
							<input class="form-control" type="email" name="email" placeholder="Your Email *" required tabindex=2>
							<input class="form-control" type="tel" name="phone" placeholder="Your Phone (optional)" data-parsley-type="integer" tabindex=4>
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
			<div class="col-md-4">
				<?php include_once('partials/_infoSB.php');?>
				<?php include_once('partials/_followSB.php');?>
			</div>	
		</div>
		</div>
</section>