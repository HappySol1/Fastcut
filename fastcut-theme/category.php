<?php get_header();?>

<section class="portfoliomain">
<?php 
global $paged;
query_posts('&paged='.$paged);
if(have_posts()){
  while(have_posts()){// стандартный цикл вывода новостей
    the_post();
    ?>
		<div class='portfoliomain-item-main'>
			<div class="portfoliomain-item-text">
				<h5><?php the_title(); ?></h5>
			</div>
			<?php echo the_content();?>
		</div>
<?php
  }
}
wp_reset_query(); 
?>
</section>
<?php 
the_posts_pagination();
get_footer();?>
<script src="<?php echo get_template_directory_uri();?>/js/portfolio.js"></script>

