//'use script';

/* eslint-disable */

const prompt = require('prompt-sync')();
let w = +prompt('please enter width of your house: ');
let h = +prompt('please enter height of your house: ');
let d = +prompt('please enter depth of your house: ');
let s = (w + h + d) / 2;


function triangleArea() {
    return (Math.sqrt(s * (s - w) * (s - h) * (s - d)));
}

function roofVolume() {
    return triangleArea() * d;
}

function livingVolume() {
    return w * h * d;
}

function houseVolume() {
    return livingVolume() + roofVolume();
}
console.log(houseVolume());

console.log("expect 2080", houseVolume(16,10,10,10));  //You need to include parameters in your functions, as shown here ...
//roof:  8 * 6 = 48, * 10 = 480
// living 10*10*16 = 1600
//tot 2080