<?php

/**
* Plugin Name: Dreamscape Animation for Precision Diagnostics
* Description: Use the shortcode [dm_animation] to embed the animation
* Author: Pak Lee
* Version: 1.1
*/

function dm_animation() {
  $template = file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/wp-content/plugins/dm-helpers-precision/template.html");
  echo $template;
}
function dm_counter($atts = [], $content = null, $tag = '') {
    
    $dm_atts = shortcode_atts([
      'initial' => '0',
      'rate' => '0.1',
    ], $atts, $tag);
   
    $html = '<div class="dm-counter" data-initital="' . dm_atts['initial'] .'" data-rate="' . dm_atts['rate'] .'"  ></div>';

    return $o;
}
function dm_register_shortcodes(){
  add_shortcode('dm_animation', 'dm_animation');
  add_shortcode('dm_counter', 'dm_counter');
}
add_action( 'init', 'dm_register_shortcodes');

function dm_animation_enqueue_script() {   
  //wp_enqueue_script( 'dm_animation_script', plugin_dir_url( __FILE__ ) . 'assets/precisionanimation18_hype_generated_script.js', array( 'jquery' ), false );
  wp_enqueue_script( 'dm_animation_script_custom', plugin_dir_url( __FILE__ ) . 'custom.js', array( 'jquery' ), true );
  wp_enqueue_script( 'dm_animation_script_counter', plugin_dir_url( __FILE__ ) . 'counter.js', array( 'jquery' ), true );
}
add_action('wp_enqueue_scripts', 'dm_animation_enqueue_script');


function shortcode_dm_jobs( $atts ) {
  ob_start();
	// Attributes
	$atts = shortcode_atts(
		array(
			'category' => '',
		),
		$atts
	);
  //query_posts('cat=' . $atts["category"]);
  
  query_posts('post_type=job');
  
 if ( have_posts() ) : while ( have_posts() ) : the_post(); 
?>
<div style="width: 40%; float: left; padding-right: 20px;">
	
<?php the_post_thumbnail(); ?>
</div>
<div style="width: 50%; float: left;">
<h3 id="post-<?php the_ID(); ?>">
<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
<?php the_title(); ?></a></h3>
<small><?php the_time('F jS, Y') ?> <!-- by <?php the_author() ?> --></small>
	<?php the_excerpt();?> <a href="<?php the_permalink() ?>">Read More</a>
</div>
<br clear="all"/>
<br/>
<?php endwhile; endif; 
  $myvariable = ob_get_clean();
  return $myvariable;
 wp_reset_query();

}

function shortcode_dm_jobs2($atts) {
// ob_start();
    $options = array(
        'post_type' => 'job'   
    );
    $query = new WP_Query( $options );
    // run the loop based on the query
    
    
    if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
        
                <?php the_ID(); ?> <?php the_title(); ?><br/>
            
        
    <?php
        //$myvariable = ob_get_clean();
        
        
        
      endwhile; 
        wp_reset_postdata();      
        //return $myvariable;
       endif;
       
    }

    function shortcode_dm_jobs3( $atts ) {
      global $wpdb;
      ob_start();
      $query = new WP_Query( array(
          'post_type' => 'job',
          'posts_per_page' => -1,
          'order' => 'ASC',
          'orderby' => 'title',
      ) );
      if ( $query->have_posts() ) { ?>
          <div class="dm_jobs-filter"></div>
          <div class="dm_jobs-listing">
              <?php while ( $query->have_posts() ) : $query->the_post(); ?>

               <?php 
                  $postID  =  get_the_ID();
                  
                  $results = $wpdb->get_row( "SELECT * FROM {$wpdb->prefix}wpjb_job WHERE post_id = " . $postID, OBJECT );
                  $jobid = $results->id;
                  
                  //print_r($results);
                  $city = $results->job_city;
                  $state = $results->job_state;

                  //get category
                  $category = $wpdb->get_row("select * from wp_wpjb_tag t, wp_wpjb_tagged td where t.id = td.tag_id and  t.type = 'category' and td.object_id = " . $jobid);
                  $catslug = $category->slug;
                  $cat = $category->title;
                  ?>
              <div id="post-<?php the_ID(); ?>" <?php post_class(); ?> data-catslug="<?php echo $catslug; ?>"  data-cat="<?php echo $cat; ?>">
                  <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a><br/>
                  <?php echo $city; ?>
              </div>             
              <?php endwhile;?>
              <script>
                jQuery(document).ready(function($){
                  $(".dm_jobs-listing").find('.job').sort(function (a, b) {
                      return (a.getAttribute('data-catslug') < b.getAttribute('data-catslug')) ? -1 : (a.getAttribute('data-catslug') > b.getAttribute('data-catslug')) ? 1 : 0;
                  }).appendTo('.dm_jobs-listing');
                  //setup headers
                  var prevheader = "";
                  var prevslug = "";
                  $(".dm_jobs-listing .job").each(function(){                      
                      var header = $(this).attr("data-cat");
                      var slug = $(this).attr("data-catslug");
                      
                      if(header != prevheader)
                      {
                        if(prevslug != "") {
                          
                          $("." + prevslug).wrapAll("<div class='job-container " + prevslug + "'></div>");
                        }
                        $("<h5 class='job-cat " + slug + "' data-catslug='" + slug +"'>" + header + "</h5>").insertBefore($(this));
                      }
                      $(this).addClass(slug);
                      prevheader = header;
                      prevslug = slug;
                  });
                  $("." + prevslug).wrapAll("<div class='job-container " + prevslug + "'></div>");
                  //setup filters
                  $(".dm_jobs-filter").append("<a class='job-filter selected job-filter-all' data-catslug='all'>All</a>");
                  $(".job-cat").each(function(){
                      var slug = $(this).attr("data-catslug");
                      var cat = $(this).text();
                      $(".dm_jobs-filter").append("<a class='job-filter' data-catslug='" + slug + "'>" + cat + "</a>");
                  });
                  $(".job-filter").on("click",function(){
                      if($(this).hasClass("selected")) {
                        var slug = $(this).attr('data-catslug');
                        if(slug != "all")
                        {
                          $(this).removeClass("selected");
                          $(".job-filter-all").addClass("selected");
                          $(".job-container").show(); 
                        }
                      } else {
                        var slug = $(this).attr('data-catslug');
                        if(slug != "all")
                        {
                          $(".job-filter").removeClass("selected");
                          $(this).addClass("selected");
                          
                          $(".job-container").hide(); 
                          $(".job-container." + slug).show(); 
                        } else {
                          $(".job-filter").removeClass("selected");
                          $(".job-filter-all").addClass("selected");
                          $(".job-container").show(); 
                        }
                      }
                  });

                });
              </script>
              <style>
              .job-container { float: left; width: 33%; margin-bottom: 10px;  }
                  .job-filter {    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    cursor: pointer;
                    display: inline-block;
                    border: 1px solid #919191;
                    padding: 3px 10px;
                    margin: 5px 10px 5px 0;
                    font-size: 16px;
                    font-weight: 100;
                    color: #919191;
                    text-transform: capitalize;
                    position: relative;
                    border-radius: 5px;
                }
                .job-filter:hover, .job-filter.selected {
                  background-color: #0a6da4;
                  border: 1px solid #0a6da4;
                  color: #fff;

                }
                .dm_jobs-filter { text-align: center; }

              </style>
              
              <?php              
              wp_reset_postdata(); ?>
          </div>
      <?php $myvariable = ob_get_clean();
      return $myvariable;
      }
  }

add_shortcode( 'dm_jobslist', 'shortcode_dm_jobs3' );

?>