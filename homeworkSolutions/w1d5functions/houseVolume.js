"use strict";
/* eslint-disable */
/*
3.	Write a program that calculates the total volume of a house, including the volume of the roof space. Your program must allow the user to 
enter width, depth, height and sweep as shown in figure below. 
houseVolume = livingVolume + roofVolume
	livingVolume = width * height * depth
	roofVolume = triangleArea*depth
	triangleArea = √s(s−a)(s−b)(s−c)
	s = (a+b+c)/2
*/

function houseVolume(width, height, depth, sweep){
    const lv = livingVolume(width, height, depth); //break here
    const rv = roofVolume(sweep, width, depth);
    return  lv + rv;  
}


function livingVolume(width, height, depth){
    return width * height * depth;
}

function roofVolume(sweep, width, depth){
    const rv = triangleArea(sweep, sweep, width) * depth;
    return rv;
}


function triangleArea(apple, sideB, sideC){
    const s = (apple + sideB + sideC)/2
    const product = s * (s - apple) * (s - sideB) * (s - sideC);
    const result = Math.sqrt(product);
    return result;  
}

console.log("expect 2080", houseVolume(16,10,10,10));
//roof:  8 * 6 = 48, * 10 = 480
// living 10*10*16 = 1600
//tot 2080
