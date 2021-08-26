// Author: Evan Durkin
// Title: Exercise 3.2
// Date: August 25, 2021

//Requires Express, HTTP, and url path and assigns them to separate variables
var express = require("express");
var http = require("http");
var path = require("path");

//Requires "morgan" for middleware and assigns Express to a variable
var logger = require("morgan");
var app = express();

// Tells Express the views are in the "views" directory
app.set("views", path.resolve(__dirname, "views"));

// Tells Express to use the EJS view engine
app.set("view engine", "ejs"); 

// Tells Express to use the "short" preset 
app.use(logger("short"));

//Creates request and respond message for index page
app.get("/", function(req,res) {
    res.render("index",{
        message: "Evan's Morgan Logger Example!"
    });
});

//Creates a new server and listens on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});
