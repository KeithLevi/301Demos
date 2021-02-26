"use strict";

const prompt = require("prompt-sync")();
/*
Make a defining table and program to print out the balance of a savings account that 
compounds interest monthly.  Prompt the user for the 
initial amount 
annual interest rate
number of years to compound
*/
/* 
input: initialAmount, annualInterest, numYears
output: final balance; and monthly balance
process: 
 - divide annual rate to monthly rate
 - multiply years by 12 to get months
 - calculate interest for each month in a loop and add to current balance
 */
const initialAmount = +prompt("enter initial amount");
const annualInterest = +prompt("enter annualInterest");
const numYears = +prompt("enter number years ");
let monthlyRate = annualInterest/12;
monthlyRate = monthlyRate/100;
const months = numYears * 12;

let balance =  initialAmount;
for (let i = 1; i <= months; i++){
    balance = balance + (monthlyRate * balance);
}
console.log("expect  1100+ if  1000 at 10% for 1 year ", balance);
