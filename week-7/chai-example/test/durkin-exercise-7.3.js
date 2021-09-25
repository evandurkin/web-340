// Title: Exercise 7.4
// Author: Evan Durkin
// Date: September 23, 2021

var fruits = require("../durkin-fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function(){
    it("should return an array of fruits", function(){
        var f = fruits("Apple,Orange,Mango");
        assert(Array.isArray(f));
    });
});