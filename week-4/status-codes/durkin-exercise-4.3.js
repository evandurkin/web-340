// Title: Exercise 4.3
// Author: Evan Durkin
// Date: September 5, 2021

// requires express, HTTP, logger and assigns them to separate variables
var express = require("express");
var http = require("http");
var logger = require("logger");

// requires Morgan for middleware and assigns express to a variable
var app = express();
app.use(logger("dev"));

// 404 response for incorrect page
app.get("/not-found", function(req,res){
    res.status(404);
    res.json({
        error:"That page wasn't found."
    })
});

// 200 response for correct page
app.get("/ok", function(req, res){
    res.status(200);
    res.json({
        message:"Here's the page!"
    })
});

// 501 response for page not implemented
app.get("/not-implemented", function(req, res){
    res.status(501);
    res.json({
        error:"This page wasn't implemented"
    })
});

// creates server and listens on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});