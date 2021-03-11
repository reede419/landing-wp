<?php
/*
|--------------------------------------------------------------------------
| Enabling functions
|--------------------------------------------------------------------------
*/

function addThemeScripts() {

    wp_enqueue_style('bootstrap', get_template_directory_uri().'/assets/css/bootstrap.min.css');
    wp_enqueue_style('parent-style', get_template_directory_uri() .'/assets/css/style.css');

    wp_enqueue_script( 'bootstrap-script', get_template_directory_uri().'/assets/js/jquery.min.js');
    wp_enqueue_script( 'bootstrap-script', get_template_directory_uri().'/assets/js/bootstrap.min.js');
    wp_enqueue_script( 'script_ready', get_stylesheet_directory_uri().'/assets/js/script.js');

}
add_action('wp_enqueue_scripts', 'addThemeScripts');

function load_font_awesome() {
    wp_enqueue_style( 'font-awesome-style', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
  }
add_action( 'wp_enqueue_scripts', 'load_font_awesome' );


add_action( 'wp_ajax_send_email', 'send_email_callback' );
function send_email_callback() {

  $email = $_POST['email'];
  $headers = 'From: My Name <myname@mydomain.com>' . "\r\n";

  wp_mail ($email, "Тема32", "Сообщение", $headers);
}

// function mailtrap($phpmailer) {
//   $phpmailer->isSMTP();
//   $phpmailer->Host = 'smtp.mailtrap.io';
//   $phpmailer->SMTPAuth = true;
//   $phpmailer->Port = 2525;
//   $phpmailer->Username = '315e1c9aeadd28';
//   $phpmailer->Password = 'cc4e11962852d7';
// }

// add_action('phpmailer_init', 'mailtrap');