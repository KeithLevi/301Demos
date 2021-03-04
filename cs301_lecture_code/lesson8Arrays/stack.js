"use strict";

/* 


    get top of stack, "top"
     - if closing bracket check to see if it matches next on stack "next"
       -- if next is a matching open bracket then (discard both and ) continue process
       -- if next is a nonmatching open bracket then unbalanced -- break (or return false)
       -- if next is another closing bracket then push top onto closeStack, replace next and continue loop
     - if top is an open bracket (it must match the top of close stack)
       -- else not balanced

when empty original stack the closeStack must also be empty, else unbalanced

const stack = ["(", "(", ")", ")"];

let balanced = true;
while (stack.length > 0) {
    const top1 = stack.pop();
    if (top1 === ")" || top1 === "}") {
        const top2 = stack.pop();
        if (top1 !== top2) {
            //if does not match then should save it on a second stack -- closeStack

 
        }
    } else 
}


//            console.log("unbalanced!!");
// balanced = false;
// break;