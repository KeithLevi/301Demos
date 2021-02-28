/* eslint-disable */

function house(h,w,d,sw){
    let s=(2*sw+w)/2;
    let triArea=Math.sqrt((s*(s-sw)*(s-sw)*(s-w)));
    let lvolum=w*h*d;
    let rvolum=triArea*d;
    let hvolum=lvolum+rvolum;
    return hvolum;
}
console.log(house(2,2,6,2).toFixed(3));
console.log('===================================================');
function sum(w,sw){
    let s=(w+2*sw)/2;
    return s;
}
function triArea(w,sw){
    let x=sum(w,sw);
    area=Math.sqrt(x*(x-w)*(x-sw)*(x-sw));
    return area;
}
function roof(w,sw,d){
   let v1= triArea(w,sw)*d;
   return v1;
}
function living(w,h,d){
   let v2=w*h*d;
   return v2; 
}
function total(h,w,d,sw){
  totalvolum=roof(w,sw,d)+living(w,h,d);
  return totalvolum; 
}
console.log(total(2,2,6,2).toFixed(3));

console.log(total(10, 16, 10, 10).toFixed(3));

// (h,w,d,sw){
// function houseVolume(width, height, depth, sweep){
//console.log("expect 2080", total(16,10,10,10));
//roof:  8 * 6 = 48, * 10 = 480
// living 10*10*16 = 1600
//tot 2080