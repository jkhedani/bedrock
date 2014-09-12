<?php

function bedrock_enqueue_scripts() {
  // Assign the appropriate protocol
  $protocol = 'http:';
  if ( !empty($_SERVER['HTTPS']) ) $protocol = 'https:';
  // Fonts
  wp_enqueue_style( 'google-fonts-open-sans', '//fonts.googleapis.com/css?family=Open+Sans:400,300,700', array(), false, 'all' );
  // Styles
  wp_enqueue_style( 'bedrock-styles', get_stylesheet_directory_uri().'/assets/css/styles.css' );
}
add_action( 'wp_enqueue_scripts', 'bedrock_enqueue_scripts' );

?>
