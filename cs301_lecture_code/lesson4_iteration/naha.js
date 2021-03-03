"use strict";

let prompt = require('prompt-sync')();

let year = + prompt("enter year ");

const aLeapYearn = 2000;

const notLeapYear = 1999;



if (year % 400 === 0) {
    console.log("Leap Year")

} else if (year % 4 === 0 && year % 100 !== 0) {

    console.log("Leap Year")

} else {

    console.log(" Not Leap Year")

}​​