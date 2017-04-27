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
                <div class="content text-center farm-content">
                    <div>
                        <h3>The Institute for Food at Miami University</h3>
                    </div>
                    <div id="map"></div>
                    <br/>
                    <div>
                        <p>The Institute for Food is a Provost Interdisciplinary Innovation Project to engage the Miami University community around issues of food, health and sustainable agriculture. Its mission is to foster healthy eating, healthy food, healthy communities, and a healthy planet.</p>
                        <p>Read more about the Institute for Food and the good things accomplished there here:
                            <a href="http://miamioh.edu/news/campus-news/2016/11/farm-to-table.html">[1]</a>
                            <a href="http://miamioh.edu/news/campus-news/2016/07/miamifarm-1stharvest.html"> [2]</a>
                    </div>
                        <script>
                        function initMap() {
                            var uluru = {lat: 39.5264934, lng: -84.7303092};
                            var map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 17,
                            center: uluru,
                            mapTypeId: 'satellite'
                            });
                            var marker = new google.maps.Marker({
                            position: uluru,
                            map: map
                            });
                        }
                        </script>
                        <script async defer
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCt-KUVLtTlOqLn4dvpqfRIKUdke3bhbAg&callback=initMap">
                        </script>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /#page-content-wrapper -->
<?php require 'Partials/bottom.view.php'; ?>