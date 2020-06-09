'use strict';

function multiBracketValidation(input){
  if(typeof input != 'string'){
    return ' the input shoub be string only';
  }

  let counter1 = 0 ;
  let counter2 = 0 ;
  let counter3 = 0 ;

  let arr = input.split('');
  for(let i=0;i<arr.length;i++){
    switch(arr[i]){
    case '{' : 
      counter1++;
      break;
    case '(' :
      counter2++;
      break;
    case '[' :
      counter3++;
      break;
      
    case '}' :
      counter1--;
      break;
    case ')' :
      counter2--;
      break;
    case ']' :  
      counter3--;  
      break;
    }
  }
  if(counter1 == 0 && counter2 == 0 && counter3 == 0 ){
    return true;
  }else{
    return false;
  }
}

module.exports = multiBracketValidation;