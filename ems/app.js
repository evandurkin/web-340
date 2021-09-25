// Title: EMS Assignment
// Author: Evan Durkin
// Date: September 18, 2021

// requires express, http, url path, morgan and assigns all to separate variables
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
const Employee = require("./models/employee");

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

// mongoDB connection string
var mongoDB = "mongodb+srv://bu-user:NRMYxvt57Yb5DQt@buwebdev-cluster-1.a6yhz.mongodb.net/test";

// creates mongo connection
mongoose.connect(mongoDB, {
    useMongoClient: true
});
// mongo Promise object
mongoose.Promise = global.Promise;

// database variable to hold connection
var db = mongoose.connection;

// error handling
db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

let employee = new Employee({
    firstName: "Evan",
    lastName: "Durkin"
});

// creates server and listens on port 8080
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080!");
});