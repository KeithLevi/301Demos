
"use strict";
/* eslint-disable */
/* 
3.	Write a JavaScript program to check whether a number is Perfect number or not?

Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
For example: 6 is the first perfect number
Proper divisors of 6 are 1, 2, 3
Sum of its proper divisors = 1 + 2 + 3 = 6.
Hence 6 is a perfect number.

input: number
output: boolean
process:
 - loop from 2 to number
 - if factor then add to sum
 - after loop see if sum equals number
*/

function perfect(number) {
    let factorSum = 1; //1 always a factor for 'perfect'

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            factorSum += i;
        }
    }
    if (factorSum === number) {
        return true;
    } else {
        return false;
    }
}
console.log(perfect(6));
console.log(perfect(16));

