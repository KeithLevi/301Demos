"use strict";

const prompt = require("prompt-sync")();

let userInput = null;
do {
  userInput = prompt("Please enter a command: ");
  console.log("You command was: " + userInput);
} while (userInput !== "stop");
console.log("exiting..."); 