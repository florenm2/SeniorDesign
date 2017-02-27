function monthChart(){
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March"],
        datasets: [{
            label: 'Average Temperature over Past 3 Months',
            data: [22, 31, 42],
            backgroundColor: [
                'rgba(0, 0, 255, 0.3)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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
        labels: populateTimes(),
        datasets: [{
            label: 'Average Temperature over Last 24 Hours',
            data: populateHourTemps(),
            backgroundColor: [
                'rgba(0, 255, 0, 0.3)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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
    var startingTime = d.getHours();
    var times = [];
    times.push(startingTime + ":00");
    for(var i = 1; i < 24; i++){
        var t = startingTime + i;
        if(t > 23){
            t = t - 23;
        }
        times.push(t + ":00");
    }
    return times;
}

function populateHourTemps(){
    
    var hourTemps = [];
    var times = populateTimes();
    //calls to database

    for(var i = 0; i < 24; i++){
        var temp = 25+i;
        hourTemps.push(temp);
    }
    
    return hourTemps;
}

function getMetrics(){
    getTemp();
    getEvapotranspiration();
    getSoilMoistureLevel();
}

function getTemp(){
    var temp = Math.random() * 100;
    temp = temp.toString().substr(0,5);
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

function getEvapotranspiration(){
    getCornE();
    getWheatE();
}

function getCornE(){
    var cornP = Math.random()*70;
    cornP = cornP.toString().substr(0,5);
    document.getElementById("cornProgress").style.width = cornP + "%";
    document.getElementById("cornProgress").innerHTML = cornP;
}

function getWheatE(){
    var wheatP = Math.random()*70;
    wheatP = wheatP.toString().substr(0,5);
    document.getElementById("wheatProgress").style.width = wheatP + "%";
    document.getElementById("wheatProgress").innerHTML = wheatP;
}

function getSoilMoistureLevel(){
    var sml = Math.random()*10;
    sml = sml.toString().substr(0,5);
    document.getElementById("soilMoistureLevel").innerHTML = "Soil Moisture Level: " + sml; 
}

function dateBack(){
    document.getElementById("")
}