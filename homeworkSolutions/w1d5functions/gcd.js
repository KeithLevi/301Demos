"use strict";

/* Write a functionexpressionand assign it to the variable greatestCommonDivisor,whichwillcompute GCD 
(Greatest Common Divisor) of two numbers.  GCDis the largest number that divides both. For example GCD of 
20 and 28 is 4 and GCD of 98 and 56 is 14

*/

/**
 * 
 * @param {number} num1 positive integer
 * @param {number} num2 positive intege
 * @returns {number}  gcd
 * process: loop from 2 to min(num1/2, num2/2) and test if number divides both, last one will be largest
 */
const greatestCommonDivisor  = function (num1, num2){
    let largest = 0;
    const loopLimit = Math.min(num1 / 2, num2 / 2);
    for (let i = 2; i <= loopLimit; i++) {

        if (num1 % i === 0 && num2 % i === 0){
            largest = i;
        }
    }
    return largest;
};

console.log("expect 4 from 20 and 28: ", greatestCommonDivisor(20, 28));
console.log("expect 4 from 28 and 20: ", greatestCommonDivisor(28, 20));