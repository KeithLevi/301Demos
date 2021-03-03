"use strict";

const prompt = require("prompt-sync")();
const tempInCelsius = prompt("Eneter value in celsius: ")
const tempInFahrenheit = 9/5*parseFloat(tempInCelsius)+32;
console.log(tempInFahrenheit);
