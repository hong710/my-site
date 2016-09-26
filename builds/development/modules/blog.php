<?php
	$linkResponse = "http://localhost:8000/";
	$sql= "SELECT * from posts ORDER BY id DESC LIMIT 3";
	$posts = $db->select($sql);
?>
<section id="blog" class="section scrollspy">
	<div class="container">
		<div class="page-heading"><h1>Blog <span>Post</span></h1></div>

		<div class="row">
			<?php while ( $post = $db->fetch_array($posts)) { ?>
			<div class="col-sm-6 col-md-4 clearfix">
                <div class="panel">
                    <div class="panel-heading" style="background-image:url('<?php echo $linkResponse.$post['image']?>')">
                        <div class="panel-title">
                            <h1><i class="fa fa-<?php echo $post['logo']; ?>"></i></h1>
                        </div>
                    </div>
                    <div class="panel-body">
                        <ul class="meta clearfix">
                            <li><i class="fa fa-user"></i><strong>Tony Hong</strong></li>
                            <li><i class="fa fa-clock-o"></i><?php echo formatDate($post['created_at']);?></li>
                        </ul>
                        <h3 class="title"><?php echo ($post['title']);?></a></h3>
                        <article class="content">
                            <p><?php echo shortenText($post['body'],150) ?></p>
                        </article>
                    </div>
                    <a class='read-more' href="<?php echo $linkResponse.'blog/'.$post['slug']?>"><strong>Read more</strong></a>
                </div>
            </div>
			<?php } ?>
		<div class="row">
			<div class="col-sm-12 center">
				<a class="bt-primary bt-md load" href="<?php echo $linkResponse;?>">Load More</a>
			</div>
		</div>
	</div>
</section>
<!-- <img class="img-responsive" src="<?php echo $linkResponse.$post['image']?>"> -->
