"use strict";

const prompt = require("prompt-sync")();

/* Write a program that asks user to enter weather for today and print "Get an 
umbrella" if weather is “rainy”.
*/
const weather = prompt("wht is the weather today: ");
if (weather === "rainy" || weather === "Rainy") {
    console.log("Get and umbrella");
}


/*
te a program that asks user to enter a number between 1 to 10, and print "Bingo!" if user enters 7 otherwise prints "Try again.".
Use === for comparison not ==
 */

 //let guess = +prompt("enter number between 1 and 10: ");
 let guess = 7;  //+prompt("enter number between 1 and 10: ");
 //guess = Number(guess);
 if (guess === 7) {
     console.log("Bingo!");
 } else {
     console.log("Try agiain");
 }