<?php
/*
Template Name: Мой шаблон страницы
*/
?>

<?php get_header(); ?>

<section class="portfoliomain">
<?php 
$args = array( 'posts_per_page' => 3 );
$query = new WP_Query( $args );
while ( $query->have_posts() ) {
	$query->the_post();?>
		<div class='portfoliomain-item-main'>
			<div class="portfoliomain-item-text">
				<h5><?php the_title(); ?></h5>
			</div>
			<?php echo the_content();?>
		</div>
		<ul>
	<?php wp_list_categories( $args ); ?>
</ul>
<?php
}
echo get_the_posts_pagination();
?>
</section>
<?php get_footer();?>


<?php get_header(); ?>

<section class="portfoliomain">
<?php 
// параметры по умолчанию
$posts = get_posts( array(
	'numberposts' => 3,
	'category'    => "portfolio",
	'orderby'     => 'date',
	'order'       => 'DESC',
	'include'     => array(),
	'exclude'     => array(),
	'meta_key'    => '',
	'meta_value'  =>'',
	'post_type'   => 'post',
	'suppress_filters' => true,
) );

foreach( $posts as $post ){
	setup_postdata($post);?>
		<div class='portfoliomain-item-main'>
			<div class="portfoliomain-item-text">
				<h5><?php the_title(); ?></h5>
			</div>
			<?php echo the_content();?>
		</div>
<?php
}
?>
</section>
<?php 
the_posts_pagination();
get_footer();?>

