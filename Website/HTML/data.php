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
                <div class="peak text-center" id="peak">
                    <h1>Database Data</h1>
                    <h5>From Previous 2 Days</h5>
                    <br/>
                    <table class="table table-responsive table-striped table-bordered" id="data">
                        <tr>
                            <th>Date/Time</th>
                            <th>Temp (deg F)</th>
                            <th>Soil Moisture Level</th>
                            <th>Water Level</th>
                        </tr>
                    </table>
                    <button id="btnExport" onclick="fnExcelReport('data');"> EXPORT </button>
                </div>
                <script src="../JS/charts.js" type="text/javascript"></script>
                <script language="javascript">
                    formatData();
                </script>
                <script src="../JS/exportData.js" type="text/javascript"></script>
            </div>
        </div>
    </div>
</div>
<!-- /#page-content-wrapper -->
<?php require 'Partials/bottom.view.php'; ?>