// Title: Exercise 7.2
// Author: Evan Durkin
// Date: September 22, 2021

var assert = require("assert");

describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray("Apple,Orange,Mango".split(',')));
    });
});

function getFruits(str) {
    return str.split(',');
}

module.exports = getFruits;