//Author: Evan Durkin
//Title: Assignment 2.4
//Date: Aug 21, 2021

//Requires Express, HTTP, and url path and assigns them to separate variables
var http = require("http");
var express = require("express");
var path = require("path");

//Express app assigned to a variable
var app = express();

//Creates path to views directory
app.set("views", path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

//Creates request and respond message for index page
app.get("/", function(req,res){
    res.render("index",{
        firstName: "Evan",
        lastName: "Durkin",
        address: "New York, NY"
    });
});

//Creates a new server and listens on port 8080
http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port %s", 8080);
});