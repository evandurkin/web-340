// Title: Exercise 5.2
// Author: Evan Durkin
// Date: September 10, 2021

// Requires express, http, and url path and assigns them to separate variables
var express = require("express");
var http = require("http");
var path = require("path");

// Assigns express to a variable
app = express();

// Directs path to views folder
app.set("views", path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

// array of names
var n = [
    "Evan",
    "Diego",
    "Chelsea",
    "Ying"
];

// request and response for index page to display names
app.get("/", function(req, res){
    res.render("index", {
        names: n
    })
});

// creates server and listens on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});