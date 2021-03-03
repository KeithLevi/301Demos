
/* eslint-disable */

/* input pos integer 
output true if sum of smallest and largest digits is odd 
process:
 go through all the digits in a while loop
 save the first and last and add them and check for divisible by 2
 */
function isOdd(number) {
    let smallest = null;  //digit in unit position
    let greatest = null;  //digit in greatest position
    let last = null;  //placeholder to remember last digit left before number goes to 0
    while (number > 0) {

        let quotient = null;
        if (smallest === null) {
            smallest = number % 10;
        } else {
            const remainder = number % 10;
            last = remainder;
            number = Math.floor(number / 10);
        }
        if (number === 0) {
            greatest = last;
            const sum = smallest + greatest;
            const result = sum % 2 !== 0;
            return result;
        }
    }
}

console.log("expect false for 789 : ", isOdd(789));
console.log("expect true for 1234 : ", isOdd(1234));
