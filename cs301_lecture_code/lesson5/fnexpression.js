/* eslint-disable */


function sayHi(){ console.log("hi");};

sayHi();
sayHi2();

/* function expression isEven --  t or f if even or not */
const isEven = function(a){ return a % 2 === 0;}

const isEven = (a) => { return a % 2 === 0;} //"fat arrow"

const test2 = isEven(44);