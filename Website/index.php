<!DOCTYPE html>
<html lang="en">
<head>
    <Title>AgriTrak</Title>
    <link rel="icon" href="https://pbs.twimg.com/profile_images/2179434139/a_logo_green.png" type="image/gif" sizes="16x16">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">

    <link href="CSS/index.css" rel="stylesheet">
    <link href="CSS/cover.css" rel="stylesheet">
</head>
<body>
<div id="wrapper">
    <div class="overlay"></div>

    <!-- Sidebar -->
    <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
        <ul class="nav sidebar-nav">
            <li class="sidebar-brand"><a href="index.php">AgriTrak</a></li>
            <li><a href="index.php">Home</a></li>
            <li><a href="HTML/farm.php">The Farm</a></li>
            <li><a href="HTML/hardware.php">The Hardware</a></li>
            <li><a href="HTML/metrics.php">Metrics</a></li>
            <li><a href="HTML/trends.php">Trends</a></li>
            <li><a href="HTML/data.php">Raw Data</a></li>
            <li><a href="HTML/about-us.php">About Us</a></li>
        </ul>
    </nav>
    <!-- /#sidebar-wrapper -->


    <!-- Page Content -->
    <div id="page-content-wrapper">
        <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
            <span class="hamb-top"></span>
            <span class="hamb-middle"></span>
            <span class="hamb-bottom"></span>
        </button>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <div class="content text-center">
                        <h1>Welcome to AgriTRAK</h1>
                        <h4>A smart farming solution for the future</h4>
                        <img src="images/sensorNode.jpg" alt="logo">
                        <br/><br/>
                        <p>AgriTRAK is an embedded system project that is designed to support any small scale farming operation by providing a metrics dashboard to its users and automated care to plants.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /#wrapper -->
<script src="JS/sidemenu.js"></script>
</body>
</html>