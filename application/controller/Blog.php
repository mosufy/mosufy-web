<?php

define('WP_USE_THEMES', false);
require('../mosufy.wp/wp-blog-header.php');

class Blog extends Controller
{  
  public function index($post_slug)
  {
    $blog = array();
    $blog_latest = array();
    $currPostID = 0;
    
    if ($post_slug!='home'){
      $posts = get_posts(array('name'=>$post_slug));
    } else {
      $posts = get_posts(array('numberposts'=>1));
    }
    
    foreach ($posts as $post) {
      $currPostID = $post->ID;
      $blog['title'] = $post->post_title;
      $blog['content'] = apply_filters('the_content', $post->post_content);
      $blog['permalink'] = URL .'/blog/'. $post->post_name .'/';
      $blog['date'] = $post->post_date;
    }
    
    $posts = get_posts(array('numberposts'=>5,'exclude'=>$currPostID));
    foreach ($posts as $k=>$v){
      $blog_latest[$k]['title'] = $v->post_title;
      $blog_latest[$k]['excerpt'] = $v->post_excerpt; //get_the_excerpt($post->ID);
      $blog_latest[$k]['permalink'] = URL .'/blog/'. $v->post_name .'/';
      $blog_latest[$k]['date'] = $v->post_date;
    }

    $this->render('blog', array(
      'metaTitle' => $blog['title'] . ' - Mohd Sufiyan',
      'metaDescription' => 'Chronicles of my life, lessons, tutorials, learnings. Everything web and technology.',
      'page' => 'blog',
      'blog' => $blog,
      'blog_latest' => $blog_latest
    ));
  }
}