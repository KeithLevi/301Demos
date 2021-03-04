"use strict";
const assert = require("assert");
const fun = require("./functions.js");

/**
 * @returns {undefined}
 */
function check37() {
    assert.strictEqual(fun.checkPrime(37), true);
}

/* 1a.	Write a function named checkPrime that accepts a parameter and returns true if the argument is a prime number otherwise returns false. */
describe("checkPrime", function () {
    
    it("37 is prime", check37);
    it(" 77 is not prime", function () {
        assert.strictEqual(fun.checkPrime(77), false);
    });
});

describe("areaOfCircle", function () {

    it("area of unit circle is Pi", function () {
        assert.strictEqual(fun.areaOfCircle(1), Math.PI * Math.PI);
    });
});