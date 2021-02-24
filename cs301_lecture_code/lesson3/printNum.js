"use strict";
/*
Write a program that asks user to enter number between 1 to 5 and prints 
out how the number is spelled.
First, write using else if 
Then, refactor it to use switch
*/
const prompt = require('prompt-sync')();

let number = +prompt("Please enter a number from 1 to 5, inclusive: ");

if (number === 1){
    console.log("one");
} else if (number === 2) {
 console.log("two");
} else if (number === 3) {
    console.log("three");
} else {
    console.log("try again");
}
/* eslint-disable */
switch (number) {
    case 1:
        console.log("one");
      break;
    case 2:
        console.log("two");
     break;
    case 3:
        console.log("three");
      break;
    default:
        console.log("try again");
  }
