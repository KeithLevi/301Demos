"use strict";

/* 8.	A stacked number is defined to be a number that is the sum of the first n positive integers for some n. The first 5 stacked numbers are:
	1 = 1
	3 = 1 + 2
	6 = 1 + 2 + 3
	10 = 1 + 2 + 3+ 4
	
Note that from the above we can deduce that 7, 8, and 9 are not stacked numbers because they cannot be the sum of any sequence of positive integers that start at 1.
Write defining table and a function named isStacked that returns true if its argument is stacked. Otherwise it returns false. [5]

So for example, isStacked(10) should return true and isStacked(7) should return false.

input: a positive integer
output: true if number is stacked
process:
 - loop from 1 to number - 1
 - have a total of indices
 - check to see if total is equal to number, then return true
 - check to see if total is > number, then return false
 */

 /**
  * 
  * @param {number} number is pos integer
  * @returns {boolean} true if stacked
  */
 function isStacked(number){
     let total = 0;
     for (let i = 1; i < number; i++){
         total = total + i;
         if (total === number) {
             return true;
         } else if (total > number){
             return false;
         }
     }
 }
 console.log("expect true", isStacked(10));
 console.log("expect false", isStacked(7));
