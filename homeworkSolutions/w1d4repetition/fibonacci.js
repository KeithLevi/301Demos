"use strict";

/* 4. Write a JavaScript program to Display Fibonacci series up to N terms. N being positive integer from user input.   
The Fibonacci series is a sequence such that each number is the sum of the two preceding ones, starting from 0 and 1. 
That is,  fib(0) = 0, fib(1) = 1, fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
INPUT
Number of terms in the series to output
OUTPUT
The terms in the series
PROCESS
Have a currentValue term and a previousvValue term
print out 0 and 1 as the first two terms
set currentValue to 1 and previous to 0
Loop from 2 to numberTerms
 get sum of current and previous
 print it out
 set previous to be current
 set current to be sum 
*/
const prompt = require("prompt-sync")();
const numTerms = prompt("enter number of terms: ");

console.log(0);
console.log(1);
let previous = 0;
let current = 1;

for (let i = 2; i <= numTerms; i++) {
  const sum = previous + current;
  console.log(sum);
  previous = current;
  current = sum;
}

