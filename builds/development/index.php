<!DOCTYPE html>
<html lang="en">
<head>
	<?php require_once('../includes/configs/config.php') ?>
    <?php require_once('../includes/database.php') ?>
    <?php require_once('../includes/functions.php') ?>
    <?php require_once ('modules/head.php');?>
</head>
<body>
	<header id="home" class="section scrollspy"><?php require_once ('modules/header.php');?></header>

    <?php require_once ('modules/about.php');?>
	
    <?php require_once ('modules/portfolio.php');?>

    <?php require_once ('modules/resume.php');?>

    <?php require_once ('modules/blog.php');?>
    
    <?php require_once ('modules/contact.php');?>
    
    <?php require_once ('modules/footer.php');?>
</body>
</html>