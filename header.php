<!DOCTYPE html>
<html>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- <title>
		<?php //echo wp_get_document_title(); ?>
	</title> -->

	<link rel="stylesheet 33333" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri() . '/' . 'assets/images/favicon.png' ?>" type="image/png">


	<?php wp_head(); ?>
</head>

<body>
    <!-- <div class="container">
        <div class="row"> -->
    <!-- <div class="col-12"> -->
        <header class="header theader">
            <div class="logo-image">
                <!-- <img src="/assets/images/logo_new.png" alt="logo_new"> -->
                <div class="logo"></div>
            </div>

            <div class="navigations">
                <input type="checkbox" id="hmt" class="hidden-menu-ticker">
                <label class="btn-menu" for="hmt">
                    <span class="first"></span>
                    <span class="second"></span>
                    <span class="third"></span>
                </label>
                <nav class="nav hidden-menu">
                    <a class="nav-link active" href="#">Active</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Disabled</a>

                    <button class="try-free">Попробовать бесплатно</button>
                </nav>
            </div>
        </header>
    <!-- </div> -->
        <!-- </div>
    </div> -->

</body>

</html>