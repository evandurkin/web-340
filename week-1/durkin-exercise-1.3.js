// Author: Evan Durkin
// Title: Exercise 1.3
// Date: 14 August 2021
// Description: Demonstrates use of accessing URL through Node.js module

var url = require("url");

var parsedURL = url.parse("https://www.testing.com/profile?name=durkin");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

