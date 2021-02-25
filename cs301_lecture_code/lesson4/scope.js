
"use strict";
/* eslint-disable */
// const  x = 5;

// console.log(x);

// if(x==5){
// 	let y = 2*x;
// 	console.log(y); //________10________
// //
// 	console.log(x); //_______5_________
// }

// console.log(x);// ______5__________
// console.log(y); 

// let x;

// if(!x) {
//     const y=5
// x = "sam";
// console.log(y);
// console.log(x);
// console.log(!x);
// console.log(!!x);
// console.log(x);
// };

/*
3.	Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
Leap year definition: Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 
100, but these centurial years are leap years if they are exactly divisible by 400.
E.g., leap years: 2016, 2004
E.g., not leap years: 1700, 1800, 100
*/

// const aLeapYear = 2004;
// const notLeapYear = 1999;

// let year = aLeapYear;

// if not div by 4 then not leap 
// else if not div by 100 yes leap
// else if div by 400 then yes leap
let year = 1800;
if (year % 4 !== 0){
    console.log('nope');
} else if (year % 100 !== 0){
    console.log('yep');
} else if (year % 400 === 0) {
    console.log('yep');
} else {
    console.log('nope');
}



// if (year % 4 === 0 && year % 100 !== 0) {
//     console.log("yep leap");
// } else {
//     console.log("nope");
// }


// let prompt = require('prompt-sync')();
// let year = +prompt("Enter the  of year: ");
// if (year % 4 === 0) {
//     if (year % 400 === 0) { 
//         console.log(year + " is leap year"); 
//     } else if( year % 100 === 0) 
//     console.log(year + " is leap year");
// } else { console.log(year + " is not leap year"); }

