// Title: Exercise 5.3
// Author: Evan Durkin
// Date: September 10, 2021

// requires express, http, pug and url path and assigns to separate variables
var express = require("express");
var pug = require("pug");
var http = require("http");
var path = require("path");

// assigns express to a variable;
var app = express();

// directs path to views folder
app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

// request and response message for index page
app.get("/", function(req, res){
    res.render("index", {
        message: "Evan's Pug based landing page!"
    });
});

// creates server and listens on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});
