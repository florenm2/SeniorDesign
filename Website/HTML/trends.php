<?php require 'Partials/top.view.php'; ?>

<!-- Charts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.bundle.js"></script>

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
                 <div class="trends text-center" id="trends">
                    <h1>Trends</h1>
                    <br/>
                    <h4>Temperature over Last Three Months</h4>
                    <canvas id="myChart" ></canvas> <!-- width="400" height="200" -->
                    </br></br>
                    <h4>Temperature over Last 12 Hours</h4>
                    <canvas id="dayTrendChart"></canvas>  <!-- width="400" height="200" -->
                </div> <!-- end trends -->
                <script src="../JS/charts.js" type="text/javascript"></script>
                <script language="javascript">
                    dayChart();
                    monthChart();
                </script>
            </div>
        </div>
    </div>
</div>
<!-- /#page-content-wrapper -->
<?php require 'Partials/bottom.view.php'; ?>