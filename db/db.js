// Retrieve
var mongodb = require('mongodb');

// Connect to the db
var dbuser = "agritrak";
var dbpassword = "seniors";
var uri = 'mongodb://' + dbuser + ':' + dbpassword + '@ds161109.mlab.com:61109/seniordesign';
mongodb.MongoClient.connect(connection, function(err, db) {
  if(!err) {
    alert("We are connected");
  }
  else{
      alert("We are NOT connected");
  }
});