"use strict";

/* Write JavaScript program to compute the mileage of a vehicle. Your program should allow the user to 
enter the beginning and ending odometerreadings and the number of gallons of gasusedand should 
output the mileage in miles per gallon. 
*/

const prompt = require("prompt-sync")();

const beginningOdometer = +prompt("Enter beginning odometer: ");
const endingOdometer = +prompt("Enter beginning odometer: ");
const gallonsUsed = +prompt("Enter gallons used: ");

const milesDriven = endingOdometer - beginningOdometer;
const milesPerGallon = milesDriven / gallonsUsed;

console.log("expect 50mpg if start 0, drive 500, 10 gallons: ", milesPerGallon, "mpg");
