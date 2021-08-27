// Title: Assignment 3.4
// Author: Evan Durkin
// Date: August 26, 2021

// Requires Express, HTTP, and url path and assigns them to separate variables
var express = require("express");
var http = require("http");
var path = require("path");

// Requires "morgan" for middleware and assigns Express to a variable
var logger = require("morgan");
var app = express();

// Tells Express the views are in the "views" directory
app.set("views", path.resolve(__dirname, "views"));

//Tells Express to use the EJS view engine
app.set("view engine", "ejs");

// Tells Express to use the "short" preset
app.use(logger("short"));

// Creates request and response message for index file
app.get("/", function(req,res){
    res.render("index", {
        message: "home page"
    });

});

// Creates request and response message for about file
app.get("/about", function(req,res){
    res.render("about",{
        message: "about page"
    });
});

// Creates request and response message for contact file
app.get("/contact", function(req,res){
    res.render("contact",{
        message: "contact page"
    });
});

// Creates request and response message for products file
app.get("/products", function(req,res){
    res.render("products", {
        message: "products page"
    });
});

// Creates server and listens on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});
