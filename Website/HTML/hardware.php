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
                <div class="content text-center">
                    <h1>Sensor Node</h1>
                    <img src="../images/uno.jpg" alt="uno">
                    <h4>Arduino Uno</h4>
                    <p>Controller of sensor node - interfaces with sensors and XBee transmitter</p>
                    <br/>
                    <img src="../images/TempSensor.jpg" alt="temp">
                    <h4>Temperature Sensor</h4>
                    <p>This sealed digital temperature probe lets you precisely measure temperatures in wet environments with a simple 1-Wire interface. The DS18B20 provides 9 to 12-bit (configurable) temperature readings over a 1-Wire interface, so that only one wire (and ground) needs to be connected from a central microprocessor.</p>
                    <br/>
                    <img src="../images/eTapeSensor.jpg" alt="waterLvl">
                    <h4>Water Level Sensor</h4>
                    <p>The eTape Liquid Level Sensor is a solid-state sensor with a resistive output that varies with the level of the fluid. The sensor's resistive output is inversely proportional to the height of the liquid: the lower the liquid level, the higher the output resistance; the higher the liquid level, the lower the output resistance.</p>
                    <br/>
                    <img src="../images/SoilMoistureSensor.jpg" alt="soilMoisture">
                    <h4>Soil Moisture Sensor</h4>
                    <p>The two large exposed pads function as probes for the sensor, together acting as a variable resistor. The more water that is in the soil means the better the conductivity between the pads will be and will result in a lower resistance, and a higher SIG out.</p>
                    <br/>

                    <h1>Transceiver</h1>
                    <img src="../images/xbee.jpg" alt="xbee">
                    <h4>XBee Pro</h4>
                    <p>Two separate XBee Pros are used - one as the transmitter and one as part of the receiver node</p>
                    <br/>

                    <h1>Receiver Node</h1>
                    <img src="../images/pi.png" alt="raspberrypi">
                    <h4>Raspberry Pi</h4>
                    <p>Responsible for processing the received data and POSTing it to mLab database</p>
                    <br/>

                    <h1>Software</h1>
                    <img src="../images/mlab.png" alt="mlab">
                    <h4>mLab</h4>
                    <p>Cloud-hosted MongoDB. Used to store farm metrics</p>
                    <br/>
                    <img src="../images/frontend.png" alt="frontend">
                    <h4>HTML, CSS, Javascript (and Bootstrap)</h4>
                    <p>Used for front-end app development and display of data</p>
                    <br/>
                    <img src="../images/php.png" alt="php">
                    <h4>PHP</h4>
                    <p>Back-end language used for data processing and views</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /#page-content-wrapper -->
<?php require 'Partials/bottom.view.php'; ?>