"use strict";

/* 3.An employee at a grocery store must frequently place boxes of cans in stacks. Write a program that allows him to 
enter the total number of boxes and the number of boxes he will place in each stack. Your program must output the number 
of stacks he will have to make. Allthe stacks except the last one must have the exact number of boxes that the employee specifies.
 The last stack must have the exact number or fewer boxes. For example, if the employee enters 74 total boxes and 6 boxes in each 
 stack yourprogram must output 13
*/
const prompt = require("prompt-sync")();

const boxes = +prompt("Enter number of boxes: ");
const boxesPerStack = +prompt("Enter number of boxes in a stack: ");

const stacks = Math.ceil(boxes / boxesPerStack);
console.log("expect 13 stacks if 74 boxes and 6 per stack: ", stacks);