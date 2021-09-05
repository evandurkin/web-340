// Title: Exercise 4.2
// Author: Evan Durkin
// Date: September 5, 2021


// requires express and HTTP and assigns them to separate variables
var express = require("express");
var http = require("http");

// assigns express to a variable
var app = express();

// gets the user URI request and sends response
app.get("/customer/:id", function(req, res) {
    var id = parseInt(req.params.id, 10);
    res.json({
        firstName: "Mary",
        lastName: "Shelley",
        employeeId: id
    });
});

// creates server and listens on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});