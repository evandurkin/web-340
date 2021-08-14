// Author: Evan Durkin
// Title: Assignment 1.5
// Date: 14 August 2021
// Description: demonstrates sending a response header to HTTP request 

var http = require("http");

function processRequest(req, res) {
    var body = "Evan's Assignment";

    var contentLength = body.length;
    res.writeHead(200, {
        "Content-Length": contentLength,
        "Content-Type": "text/plain"
    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);

