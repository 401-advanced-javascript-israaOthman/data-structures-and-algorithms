'use strict';

const Stack = require('../Data-Structures/ll-insertion/ll-insertion');

function multiBracketValidation(input){
  if(typeof input != 'string'){
    return ' the input shoub be string only';
  }

  let counter1 = 0 ;
  let counter2 = 0 ;
  let counter3 = 0 ;

  for(let i=0;i<input.length;i++){
    switch(input[i]){
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


// after I wrote the first solution I figured out that I can also solve it using stack 
//but I already wrote the test  for the first solution and thw whiteboared also 

function multiBracketValidation2(input){

  if(typeof input != 'string'){
    return ' the input shoub be string only';
  }

  let i = 0;
  let stack = new Stack();
  while(input[i]){
    switch(input[i]){
    case '{' : 
    case '(' :
    case '[' :
      stack.push(input[i]);
      break;
    case '}' : 
      if(stack==null){
        return false;
      }
      if(stack.peek == '{'){
        stack.pop();
      }else {
        return false;
      }
      break;
    case ')' :
      if(stack==null){
        return false;
      }
      if(stack.peek == '('){
        stack.pop();
      }else {
        return false;
      }
      break;
    case ']' :
      if(stack==null){
        return false;
      }
      if(stack.peek == '['){
        stack.pop();
      }else {
        return false;
      }
      break;
    }

  }

  if(stack.top == null){
    return true;
  }else{
    return false;
  }

}