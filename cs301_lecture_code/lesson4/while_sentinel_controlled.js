"use strict";

const prompt = require("prompt-sync")();

let userInput = prompt("Please enter a command: ");
let loopCount = 0;
while (userInput !== "stop") {
  console.log("Your command was: ", userInput + loopCount);
  loopCount = loopCount + 1;
  // userInput = prompt("Please enter a command: ");
}
console.log("exiting...");
