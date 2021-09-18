// Title: EMS Assignment
// Author: Evan Durkin
// Date: September 18, 2021

// requires express, http, url path, morgan and assigns all to separate variables
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// assigns express to app variable
var app = express();

// directs url path to views folder
app.set("views", path.resolve(__dirname,"views"));

// sets ejs as template system
app.set("view engine", "ejs");

// uses morgan for middleware
app.use(logger("short"));

// request and response for index page
app.get("/", function(req, res){
    res.render("index", {
        title: "Home Page"
    });
});

// creates server and listens on port 8080
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080!");
});