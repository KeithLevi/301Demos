"use strict";

const prompt = require("prompt-sync")();

let userInput = prompt("Please enter a command: ");

while (userInput !== "stop") {
  console.log("Your command was: " + userInput);
  // userInput = prompt("Please enter a command: ");
}
console.log("exiting...");
