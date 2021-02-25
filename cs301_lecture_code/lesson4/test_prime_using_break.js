"use strict";

const prompt = require("prompt-sync")();

let number = prompt("Please enter a number to test if it is pime: ");
let isPrime = true;

let i = 2;
while (isPrime === true){
  if (number % i == 0) {
    isPrime = false;
  }
  i = i + 1;
}



for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    isPrime = false;
    break;
  }
}


console.log(isPrime);