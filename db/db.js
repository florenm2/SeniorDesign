document.getElementById("t").innerHTML = "t";

// Retrieve
var mongodb = require('mongodb');

// Connect to the db
var dbuser = "agritrak";
var dbpassword = "seniors";
var uri = 'mongodb://' + dbuser + ':' + dbpassword + '@ds161109.mlab.com:61109/seniordesign';
mongodb.MongoClient.connect(connection, function(err, db) {
  if(!err) {
    document.getElementById("t").innerHTML +=  "We are connected";
  }
  else{
      document.getElementById("t").innerHTML += "We are NOT connected";
  }
});