'use strict';

function insertShiftArray(arr,num){
  if(typeof(arr)==='undefined' || typeof(num)==='undefined' ){
    return 'you should Enter array and number';
  } else {
    let ln = Math.ceil( arr.length/2);
    let copy = [];
    for(let i=0 ; i<arr.length+1;i++){
      if(i === ln){
        copy[i] = num;
      } else if (i>ln){
        copy[i] = arr[i-1];
      }else{
        copy[i] = arr[i];}
    }   
  
    return copy; }
} 



let arr1=[2,4,6,8];
let arr2 = [4,8,15,23,42];

console.log(insertShiftArray(arr1,5));
console.log(insertShiftArray(arr2,16));
console.log(insertShiftArray([],16));


module.exports =insertShiftArray;