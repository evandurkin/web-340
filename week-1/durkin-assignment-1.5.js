// Author: Evan Durkin
// Title: Assignment 1.5
// Date: 14 August 2021
// Description: demonstrates sending a response header to HTTP request 

//assigns the http module to a variable
var http = require("http");

//web browser request and respond function
function processRequest(req, res) {
    var body = "Evan's Assignment"; //response to client

    var contentLength = body.length;
    res.writeHead(200, { //writes the response to client
        "Content-Length": contentLength,
        "Content-Type": "text/plain"
    });

    res.end(body); //ends the response

}

var s = http.createServer(processRequest); //assigns the server to a variable

s.listen(8080); //server listens on port 8080

