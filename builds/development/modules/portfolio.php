<section id="portfolio" class="section scrollspy">
	<div class="container">
		<div class="page-heading"><h1><span>My</span> Portfolio</h1></div>
		<div class="row showcase">
			<?php 
			// $pic=['project_1', 'project_2','project_3','project_4','project_5','project_6'];
			$pic=['project_1', 'project_2','project_3'];
			$link=[
				'blog.tonywebdev.com',
				'udomthai.com',
				'sageongraham.com'
			];

			$description=[
				['Tony House Blog','PHP, MySQL, Laravel 5.2, SASS, HTML5/CSS, jQuery.'],
				['Udom Thai Restaurant','PHP, MySQL, Wordpress, SASS, HTML5/CSS, jQuery'],
				['Sage Restaurant','PHP, MySQL, SASS, HTML5/CSS, jQuery']
			];
			foreach ($pic as $key => $value) { ?>
			<div class="col-sm-6 col-md-4">
				<div class=sc-item>
				<img src="assets/img/project_imgs/<?php echo ($key+1);?>.jpg" alt="<?php echo $value; ?>">
				<div class="project-link hide">
					<div class="center">
						<h4><?php echo $description[$key][0];?></h4>
						<p><?php echo $description[$key][1];?></p>
					
						<br>
						<a href="assets/img/project_imgs/<?php echo ($key+1); ?>.jpg" data-lightbox="<?php echo ($key+1); ?>"><i class="fa fa-search-plus"></i></a>
						<a href="http://<?php echo $link[$key]; ?>" target="blank"><i class="fa fa-link"></i></a>
					</div>					
				</div>
				</div>	
			</div>
			<?php } ?>
		</div>
	</div>
	<div class="container">
		<div class="row tag center">
			<div class="col-sm-2 col-xs-6"><img class="img-responsive" src="assets/img/vendor_logo/laravel.png" alt="laravel"></div>
			<div class="col-sm-2 col-xs-6 col-sm-offset-1"><img class="img-responsive" src="assets/img/vendor_logo/bootstrap.png" alt="bootstrap"></div>
			<div class="col-sm-2 col-xs-6 col-sm-offset-1"><img class="img-responsive" src="assets/img/vendor_logo/jquery.png" alt="jQuery"></div>
			<div class="col-sm-2 col-xs-6 col-sm-offset-1"><img class="img-responsive sass" src="assets/img/vendor_logo/sass.png" alt="sass"></div>
		</div>			
	</div>	
</section>