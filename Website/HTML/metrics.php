<?php require 'Partials/top.view.php'; ?>
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
                 <div class="metrics text-center" id="metrics">
                    <br/>
                    <h1>Metrics</h1>
                    <h5 class="text-center" id="date"></h5>
                    <h3 id="tempDisplay">Temperature: </h3>
                    <div class="progress">
                        <div class="progress-bar progress-bar-info" role="progressbar" id="coldTemp"></div>
                        <div class="progress-bar progress-bar-success" role="progressbar" id="goodTemp"></div>
                        <div class="progress-bar progress-bar-warning" role="progressbar" id="hotTemp"></div>
                    </div><!-- end progress -->
                    </br>
                    <h3 id="waterLevelDisplay">Water Level: </h3>
                    <div class="progress">
                        <div class="progress-bar progress-bar-info" role="progressbar" id="waterLevel" aria-valuenow="5"
                        aria-valuemin="0" aria-valuemax="5" >
                        </div>
                    </div>
                    </br>

                    <h3 id="soilMoistureLevel"></h3>
                </div><!-- end metrics -->
                <script src="../JS/charts.js" type="text/javascript"></script>
                <script language="javascript">
                    getMetrics();
                </script>
            </div>
        </div>
    </div>
</div>
<!-- /#page-content-wrapper -->

<?php require 'Partials/bottom.view.php'; ?>