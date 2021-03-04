"use strict";

/* Write a function named testPrime that returns true when argument to the function is a prime number, otherwise returns false.
Now call the function to test if user input is prime or not.
*/

/**
 * 
 * @param {number} number is any integer
 * @returns {boolean} true or false
 * process
 *  - loop from 2 to number and check for factors
 */
function testPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}



console.log("expect true for 5 :", testPrime(5));
console.log("expect false for 55 :", testPrime(55));