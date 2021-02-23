"use strict";

const prompt = require("prompt-sync")();

let number = prompt("Please enter a number to test if it is pime: ");
let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    isPrime = false;
    break;
  }
}


console.log(isPrime);