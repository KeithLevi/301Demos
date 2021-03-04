"use strict";

/* 
https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
    Declare a character stack S.
    Now traverse the expression string exp. 
       // If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
        If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine else brackets are not balanced.
    After complete traversal, if there is some starting bracket left in stack then “not balanced”
*/
const stack = ["(", "(", ")", ")"];

let balanced = true;
while (stack.length > 0) {
    const top1 = stack.pop();
    if (top1 === ")" || top1 === "}") {
        const top2 = stack.pop();
        if (top1 !== top2) {
            console.log("unbalanced!!");
            balanced = false;
            break;
        }
    }
}
