"use strict";

/* eslint-disable */
/* Write a defining table and then a JavaScript function 
sReversedPrime, that takes a number as an input and check if the 
reverse of the input number is prime or not.

Hint: Write two helper functions, one for reversing and 
another for checking prime and use it in the function isReversedPrime.

e.g., isReversedPime(32) returns true because reverse of 
32 which is 23 is prime
input: number
output: true if reverse is prime
prrocess:
 - first reverse the number
   -- get a digit
   -- get the quotient
   -- save reversedNum as we go
   -- with each new digit mult reversedSum by 10 and add new digit
 - then check prime and return true if it is

*/

/**
 * 
 * @param {number} number is an integer
 * @returns {boolean} true if reverse is prime
 */

function reverse(number) {
    let reversedNum = 0;

    while (number > 0) {
        const digit = number % 10;
        number = Math.floor(number / 10);
        reversedNum = (reversedNum * 10) + digit;
    }
   //return reversedNum;
}
console.log("expect 4321: ", reverse(1234));
