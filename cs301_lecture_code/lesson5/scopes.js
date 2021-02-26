"use strict";
/* eslint-disable */

let x = "global_x"

function outer(outer_param) {
  let y = "outer_local_y";
  
  console.log(x, y, outer_param); // x,y and outer_param are accessible (in scope) 

  
  console.log(inner_param, z)   // inner_param and z are out of scope
  function inner(inner_param) {
    let z = "inner_local_z";
    
    console.log(z, inner_param, y, x); // x,y,z and outer_param all are in scope
  }
  console.log(x, y, outer_param);
  
  console.log(inner_param, z)  // inner_param and z are out of scope

  inner("inner_parameter");

  console.log(z);
}

outer("outer_parameter");

 console.log(y);
