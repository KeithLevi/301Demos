"use strict";

/* 5 Write a function expression to find LCM of any two numbers using the greatestCommonDivisor 
function from previous question. Assign it to the variable leastCommonMultiple.  LCM 
of two numbers is the smallest number that can be divided evenly by both numbers.  Write it as a function expression
*/

/**
 * 
 * @param {number} num1 an integer
 * @param {number} num2 an integer
 * @returns {number} lcm
 * process: loop from num1 * num2 to max(num1, num2) and see if the number can be divided evenly by both, last will be lcm
 */
function leastCommonMultiple(num1, num2) {


}



/* 6. Now write a new version of least CommonMultiplethat uses the greatestCommonDivisor function and the
 mathematical relationship between LCM and GCD to find the LCM.  Research the LCMand GCD relationship online.
 --- LCM × GCD is equal to the product of two given numbers

 process:
  LCM = product / GCD  
 */

 /* 7.  Write a function compute, that takes three parameters. First parameter 
 is a call back function that does the actual operation, second and third are the operands.
For e.g., compute (add, 2,3) should return 5
- Write compute function as a function expression.
- Write add function as a function expression and call compute passing add as a callback.
o Refactor to pass add logic as an anonymous function. (Make a copy first)
o Refactor to pass add logic as an arrow function. (Make a copy first)

*/

console.log(add(100, 200));


const compute = function(computeFunc, num1, num2){
    return computeFunc(num1, num2);
};

/**
 * 
 * @param {*} number1 any number
 * @param {*} number2 any number
 * @returns {number} sum
 */
function add(number1, number2){
    return number1 + number2;
}

const mult = function(number1, number2){
    return number1 * number2;
};



console.log("compute(add, 2,3) should return 5 : ", compute(add, 2, 3));
console.log("compute(mult,2,3) should return 6 : ", compute(mult, 2, 3));


