// Title: Exercise 7.2
// Author: Evan Durkin
// Date: September 22, 2021

// require statement
var assert = require("assert");

// array string for assert
describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray("Apple,Orange,Mango".split(',')));
    });
});

// returns string separated by comma
function getFruits(str) {
    return str.split(',');
}

// export statement
module.exports = getFruits;