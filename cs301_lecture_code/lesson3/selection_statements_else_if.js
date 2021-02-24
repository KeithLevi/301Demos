"use strict";

const prompt = require("prompt-sync")();

let gpa = prompt("Please enter your gpa: ");
gpa = parseFloat(gpa);

let grade;


if (gpa === 4.0) {
  grade = 'A';
} else if (gpa >= 3) {
  grade = 'B';
} else if (gpa >= 2) {
  grade = 'C'
} else {
  grade = 'NC';
}

console.log('your grade is ' + grade);