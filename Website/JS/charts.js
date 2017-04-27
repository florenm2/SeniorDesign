function monthChart(){
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: getLastThreeDays(),
        datasets: [{
            label: 'Temperature',
            data: getAverageTemps(),
            backgroundColor: 'rgba(0, 0, 255, 0.3)' , /*[
                'rgba(0, 0, 255, 0.3)' ,
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)' 
            ],*/
            borderColor: 'rgba(255,99,132,1)', /*[
                'rgba(255,99,132,1)' ,
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)' 
            ],*/
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

function dayChart(){
var ctx = document.getElementById("dayTrendChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: timeData(24),
        datasets: [{
            label: 'Temperature',
            data: populateHourTemps(),
            backgroundColor: 'rgba(0, 255, 0, 0.3)',/*[
                'rgba(0, 255, 0, 0.3)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)' 
            ],*/
            borderColor: 'rgba(255,99,132,1)',/*[
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)' 
            ],*/
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

function waterLevelChart(){
    var ctx = document.getElementById("waterLevelChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeData(12),
            datasets: [{
                label: 'Water Level (in)',
                data: waterLevelData(),
                backgroundColor: 'rgba(0, 255, 255, 0.3)',/*[
                 'rgba(0, 255, 0, 0.3)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
                 ],*/
                borderColor: 'rgba(255,99,132,1)',/*[
                 'rgba(255,99,132,1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
                 ],*/
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}


function populateTimes(){
    var d = new Date();
    var startingTime = d.getHours()-1;
    var times = [];
    times = timeData();
    return times;
}

function populateHourTemps(){
    
    
    var hourTemps = [];
    var times = populateTimes();
    //calls to database
    
    hourTemps = tempData();

    return hourTemps;
}

function getMetrics(){
    getTemp();
    getWaterLevel();
    getSoilMoistureLevel();
    setCurrentDateTime();
}

function getTemp(){
    var temp = currentTemp();
    document.getElementById("tempDisplay").innerHTML = "Temperature: " + temp + "&#8457";
    if(temp < 32){
        document.getElementById("coldTemp").style.width = temp + "%";
        document.getElementById("coldTemp").innerHTML = temp + "&#8457";
    }
    else if(temp > 70){
        document.getElementById("hotTemp").style.width = temp + "%";
        document.getElementById("hotTemp").innerHTML = temp + "&#8457";
    }
    else{
        document.getElementById("goodTemp").style.width = temp + "%";
        document.getElementById("goodTemp").innerHTML = temp + "&#8457";
    }

}

function getWaterLevel(){
    var waterL= currentWaterLevel();
    document.getElementById("waterLevelDisplay").innerHTML = "Water Level: " + waterL + " in";
    document.getElementById("waterLevel").style.width = waterL/5 * 100 + "%";
    document.getElementById("waterLevel").innerHTML = waterL;
}

function getSoilMoistureLevel(){
    var sml = currentSoilMoisture();
    document.getElementById("soilMoistureLevel").innerHTML = "Soil Moisture Level: " + sml; 
}


//Database 
var baseuri = "https://api.mlab.com/api/1";
var apiKey = "yYhdTVjbQWk0303jla3N_39DJp8RAJ4P";

function getCollectionData(){
    var url = baseuri + "/databases/seniordesign/collections/metrics?apiKey=" + apiKey;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    console.log(response);
    //formatData(response);
    //var temperatureData = tempData(response);
    return response;
}

function formatData(){
    //console.log(data[0].measurements.length);
    var twoDaysAgo = new Date((new Date()).valueOf() - 1000*60*60*24*2);
    //console.log(twoDaysAgo);
    var tableIndex = 0;
    for(var i=0; i<data.length; i++){
        tempData = data[i];
        var tempDate = new Date(tempData.dateTime);

        if(tempDate > twoDaysAgo){
            var table = document.getElementById("data");
            var row = table.insertRow(tableIndex+1);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = tempData.dateTime;
            var cell2 = row.insertCell(1);
            cell2.innerHTML = tempData.temperature;
            var cell3 = row.insertCell(2);
            cell3.innerHTML = tempData.soilMoisture;
            var cell4 = row.insertCell(3);
            cell4.innerHTML = tempData.waterLevel;
            tableIndex++;
        }


    }
}

function tempData(){
    var tData = [];
    var dataLength = data.length;
    for(var i=dataLength-24; i<dataLength; i++){
        tData.push(data[i].temperature);
    }
    //formatData(data);
    return tData;
}

function timeData(hours){
    var tData = [];
    var dataLength = data.length;
    for(var i=dataLength-hours; i<dataLength; i++){
        var tempDate = new Date(data[i].dateTime);
        tData.push(tempDate.toLocaleTimeString());
        //tData.push(tempDate. + "/" + tempDate.getDay() + tempDate.getHours() + ":" + tempDate.getMinutes());
    }
    return tData;
}

function waterLevelData(){
    var wLvl = [];
    var dataLength = data.length;
    for(var i=dataLength-12; i<dataLength; i++){
        wLvl.push((data[i].waterLevel));
    }
    return wLvl;
}

function currentTemp(){
    //var data = databaseData;
    console.log("test");
    var latestT = data[data.length - 1].temperature;
    return latestT;
}

function currentWaterLevel(){
    var latestWL = data[data.length - 1].waterLevel;
    return latestWL;
}

function currentSoilMoisture(){
    //var data = databaseData;
    var cSoil = data[data.length - 1].soilMoisture;
    return cSoil;
}

function setCurrentDateTime(){
    var currentDateTime =  data[data.length - 1].dateTime;
    var dateObj = new Date(currentDateTime).toLocaleString();
    document.getElementById("date").innerHTML = "Last Measured at: " + dateObj;
}

function getLastThreeDays(){
    var currentDate = new Date();
    var oneDayAgo = new Date((new Date()).valueOf() - 1000*60*60*24);
    var twoDaysAgo = new Date((new Date()).valueOf() - 1000*60*60*24*2);

    return [twoDaysAgo.toLocaleDateString(), oneDayAgo.toLocaleDateString(), currentDate.toLocaleDateString()];
}

function getAverageTemps(){
    var currentDateTemps = [];
    var prevDateTemps = [];
    var prevPrevDateTemps = [];
    var currentDate = new Date().getDate();
    for(var i =0; i<data.length; i++){
        var tempDate = new Date(data[i].dateTime).getDate();
        if (tempDate == currentDate-2){
            prevPrevDateTemps.push(data[i].temperature);
        }else if(tempDate == currentDate-1){
            prevDateTemps.push(data[i].temperature);
        }else if(tempDate == currentDate){
            currentDateTemps.push(data[i].temperature);
        }
    }

    var avgTemps = [avgCalc(prevPrevDateTemps), avgCalc(prevDateTemps), avgCalc(currentDateTemps)];
    return avgTemps;
}

//helper for getAvgerageTemps
function avgCalc(arr){
    var length = arr.length;
    if(length > 0){
        var sum = 0;
        for(var i=0; i<length; i++){
            sum += arr[i];
        }
        return sum/length;
    } else{
        return 0;
    }

}


//to run
var data = getCollectionData();

