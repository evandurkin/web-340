// Author: Evan Durkin
// Title: Exercise 1.3
// Date: 14 August 2021
// Description: Demonstrates use of accessing URL through Node.js module

// uses the URL module and assigns it to a variable
var url = require("url");

// parses the URL string and assigns it to a variable
var parsedURL = url.parse("https://www.testing.com/profile?name=durkin");

// calls the parsed elements of the URL string with parsedURL variable
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

