"use strict";

exports.addends = addends;
//exports.areaOfCircle = areaOfCircle;

/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {number} summ of end elements
 */
function addends(arr){
    const endsSum = arr[0] + arr[arr.length -1];
    return endsSum;
}