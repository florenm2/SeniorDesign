var baseuri = "https://api.mlab.com/api/1";
var apiKey = "yYhdTVjbQWk0303jla3N_39DJp8RAJ4P";


function getDatabases(){
    var url = baseuri + "/databases?apiKey=" + apiKey;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    console.log(response);
    return response;
}

function getCollectionData(){
    var url = baseuri + "/databases/seniordesign/collections/metrics?apiKey=" + apiKey;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    console.log(response);
    formatData(response);
}

function formatData(data){
    console.log(data[0].measurements.length);
    for(var i=0; i<data[0].measurements.length; i++){
        tempData = data[0].measurements[i];
        document.getElementById("data").innerHTML += "dateTime: " +  tempData.dateTime + "<br>Temp: " + tempData.temperature + "<br>";
    }
}

getCollectionData();
