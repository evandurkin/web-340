// Title: Exercise 3.3
// Author: Evan Durkin
// Date: August 26, 2021

//Requires Express, HTTP, and URL path and assigns them to separate variables
var express = require("express");
var http = require("http");
var path = require("path");

//Requires "morgan" for middleware and assigns Express to a variable
var logger = require("morgan");
var app = express();

// Tells Express the views are in the "views" directory
app.set("views", path.resolve(__dirname, "views"));

//Tells Express to use the EJS view engine
app.set("view engine", "ejs");

//Tells Express to use the "short" preset
app.use(logger("short"));

//Creates request and response message for index page
app.get("/:employeeId", function(req,res){
    var employeeId = parseInt(req.params.employeeId, 10);
    res.render("index",{
        employeeId: employeeId
    })
});

//Creates a new server and listens on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});