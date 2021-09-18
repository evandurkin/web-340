// Title: Exercise 6.3
// Author: Evan Durkin
// Date: September 16, 2021

// require
var mongoose = require("mongoose");
var http = require("http");
var logger = require("morgan");
var express = require("express");

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

// assigns express
var app = express();

// express uses morgan for middleware
app.use(logger("dev"));

// creates server and listens on port 5000
http.createServer(app).listen(5000, function(){
    console.log("Application started on port 5000");
});