"use strict";

const x11 = 5;
const y11= "7";
const test1 = true;

let result = x11+y11;
console.log(result);
console.log(typeof result);

result = x11+test1;
console.log(result);
console.log(typeof result);   

result = test1+y11;
console.log(result);
console.log(typeof result);

result = y11*2;
console.log(result);
console.log(typeof result);   