"use strict";
/* Write a loop that keeps on prompting for age until you enter age older than 18
Write both while and do while versions.
*/
const prompt = require("prompt-sync")();

// let age = prompt("enter age: ");
// while (age < 18){
//     age = prompt("enter age: ");
// }

let age;
do {
    age = prompt("enter age: ");
} while (age < 18);

