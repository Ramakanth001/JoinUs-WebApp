require('dotenv').config();
var mysql = require('mysql2'); 
var express =  require('express');
var app = express();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});



// app.get("/", function(request, response) {
//   response.send("Hi! You came to the root page.");
// });

// app.get("/joke", function(request, response) {
//   response.send("It's indeed a joke");
// });

// app.get("/joke/serious", function(request, response) {
//   response.send("It's not a joke. Be serious");
// });

// app.get("/random_num", function(request, response) {
//   var rand_num = Math.floor(Math.random() * 10)+1;
//   response.send("The Random number from 1-10 is : "  + rand_num)
// });

app.get("/", function(request, response) {
  var q = 'SELECT COUNT(*) as count FROM users';
  connection.query(q, function (error, results) {
    if (error) throw error;
    var msg = "We have " + results[0].count + " users";
    response.send(msg);
    });
  });

app.listen(8080, function() {
  console.log("Listening on 8080 port!");
})


// app.listen(8080, function(){
//     console.log("Server running on 8080!");
// });