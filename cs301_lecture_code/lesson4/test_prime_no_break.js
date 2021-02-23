"use strict";

const prompt = require("prompt-sync")();

let number = prompt("Please enter a number to test if it is prime: ");
let factorCount = 0;

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    factorCount++;
  }
}
let isPrime = factorCount === 0;
console.log(isPrime);