"use strict";
/* eslint-disable */
/*
rite a JavaScript function named secondSmallest that accepts three integer numbers as parameters and return the second-smallest value among them.

For e.g. secondSmallest(-1,9,7) à 7

input: 3 numbers
output: 2nd smallest
process: 
 if a < b && b < c return b
 if a < b && c < b
*/

function second(a, b, c) {
    if (a < b) {
        if (c < a) {
            return a;
        } else {
            if (b < c) {
                return b;
            } else {
                return c;
            }
        }
    } else if (c < b) {
        return b;
    } else if (a < c) {  //a > b and c > b
        return a;
    } else {
        return c;
    }
}

console.log("expect 2 ", second(1, 2, 3));
console.log("expect 2 ", second(2, 1, 3));
console.log("expect 2 ", second(3, 2, 1));
console.log("expect 2 ", second(3, 1, 2));
console.log("expect 2 ", second(1, 3, 2));
console.log("expect 2 ", second(2, 3, 1));