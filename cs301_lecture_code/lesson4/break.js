"use strict";

// for(let i=1; i<10; i++){
//     if(i%3===0) {
//         break;
//     }
//     console.log(i);
// }//1 2

let i = 1;
let flag = true;
while (i < 10 && flag) {
    if(i%3===0) {
        flag = false;
    }
    i++;
    console.log(i);
}//1 2
