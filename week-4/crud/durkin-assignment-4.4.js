// Title: Assignment 4.4
// Author: Evan Durkin
// Date: September 5, 2021

// requires express, http, morgan and assigns them to separate variables
const express = require("express");
const http = require("http");
const logger = require("morgan");

// assigns express to a variable and uses morgan for middleware
let app = express();
app.use(logger("dev"));

app.set("port", process.env.PORT || 8080);


// sends response for GET request
app.get("/", function(req, res) {
    res.send("Hey! the API has been invoked as an HTTP GET request.");
});

// sends response for POST request
app.post("/", function(req, res) {
    res.send("Hey! the API has been invoked as an HTTP POST request.");
});

// sends response for PUT request
app.put("/", function(req, res) {
    res.send("Hey! the API has been invoked as an HTTP PUT request.");
});

// sends response for DELETE request
app.delete("/", function(req, res) {
    res.send("Hey! the API has been invoked as an HTTP DELETE request");
});

// creates server and listens on port set from app.get
http.createServer(app).listen(app.get("port"), function() {
    console.log(`The application has started and is listening on port ${app.get("port")}`);
});
