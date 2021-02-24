"use strict";

const prompt = require("prompt-sync")();

const quarts = prompt("Enter a distance in kilometers ");

const volumeInput = quarts*0.946353;



console.log(volumeInput, "in mile");

//console.log(${volumeInput} `in mile`);
console.log(`${volumeInput} in mile`);