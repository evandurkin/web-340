//Author: Evan Durkin
//Title: Exercise 2.3
//Date: Aug 21, 2021

////Requires Express and HTTP and assigns them to separate variables
var express = require("express");
var http = require("http");

//Express app assigned to a variable
var app = express();

//creates route and response for homepage, about, and contact pages
app.get("/", function(req,res){
    res.end("Welcome to the homepage!\n");
});


app.get("/about", function(req,res){
    res.end("Welcome to the about page!\n");
});


app.get("/contact", function(req,res){
    res.end("Welcome to the contact page!\n");
});

//creates 404 route and response for pages not found
app.use(function(req,res){
    res.statusCode = 404;
    res.end("404!");
});

//creates a new server and listens on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port%s", 8080);
});