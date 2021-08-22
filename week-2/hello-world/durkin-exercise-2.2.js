//Author: Evan Durkin
//Title: Exercise 2.2
//Date: Aug 21, 2021

//Requires Express and HTTP and assigns them to separate variables
var express = require("express");
var http = require("http");

//Express app assigned to a variable
var app = express();

//function for creating req and res messages
app.use(function(req, res)
{
    console.log("In comes a request to: %s", req.url); 

    res.end("Hello World\n");
})

//creates a new server and listens on port 8080
http.createServer(app).listen(8080, function()
{
    console.log("Application started on port %s", 8080);
});