<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <base href="{{ asset("") }}">

    <title></title>
    <meta name="description" content="">

    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes">
    <!-- Robots -->
    <meta name="robots" content="index,follow">
    <meta name="robots" content="noodp,noydir">
    <meta name="googlebot" content="index,follow">

    <meta property="og:title" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content=""/>
    <meta property="og:image" content="" />
    <meta property="og:site_name" content="" />

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <!--
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
-->
    <link rel="stylesheet" href="{{ asset('css/stylus.css?v=0.0.3') }}">

    <script src="{{ asset('js/vendor/modernizr.js') }}"></script>
    <script src="js/vendor/Chart.min.js"></script>

    <link rel="stylesheet" href="js/extjs/src/ux/grid/feature/resources/MultiGroupingSummary.css">
    <link rel="stylesheet" href="js/extjs/src/ux/grid/plugin/resources/GroupingPanel.css">
    <link rel="stylesheet" href="js/extjs/resources/ext-theme-neptune/ext-theme-neptune-all.css">
    <style>
        .x-form-trigger-wrap {
            margin-bottom: 0;
        }
    </style>
    
    <script src="js/extjs/ext-all-debug.js"></script>
    
    <script>
        Ext.Loader.setConfig({
            enabled         : true,
            disableCaching  : true,
            paths  : {
              UCI   : "./js/uci/",
              Base  : "./js/base/",
              Ext   : "./js/extjs/src/"
           }
        });
    </script>

</head>
<body>


<!--[if lt IE 7]>
<p class="browsehappy">Estás utilizando un navegador <strong>obsoleto</strong>. Por favor <a href="http://browsehappy.com/">actualízalo aquí</a> para mejorar tu experiencia.</p>
<![endif]-->



@yield("topbar")

<section>
    @yield("content")
</section>





<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')</script>

<script src="{{ asset('js/main.js?v=0.0.1') }}"></script>
<script src="{{ asset('js/foundation.min.js') }}"></script>

<script src="./js/foundation/responsive-tables.js"></script>

<script>
    $(document).foundation();
</script>

    


<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-XXXXX-X');ga('send','pageview');
</script>
</body>
</html>
